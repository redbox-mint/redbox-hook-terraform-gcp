// Copyright (c) 2019 Queensland Cyber Infrastructure Foundation (http://www.qcif.edu.au/)
//
// GNU GENERAL PUBLIC LICENSE
//    Version 2, June 1991
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along
// with this program; if not, write to the Free Software Foundation, Inc.,
// 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

import { Observable } from 'rxjs/Rx';
import services = require('../core/CoreService.js');
import { Sails } from "sails";
import { Terraform, Terragrunt } from 'js-terraform';
declare var sails: Sails;
declare var _;
declare var RecordsService, TranslationService;

export module Services {
  /**
   * Terraform laucher service
   *
   * Author: <a href='https://github.com/shilob' target='_blank'>Shilo Banihit</a>
   *
   */
  export class TfGcpService extends services.Services.Core.Service {
    protected _exportedMethods: any = [
      'bootstrap',
      'getInputMap',
      'getLocation'
    ];

    public bootstrap(): Observable<any> {
      // nothing to do
      return Observable.of("");
    }


    public getInputMap(oid: string, record: any) {
      const inputMap = {};
      const recType = record.metaMetadata.type;
      // build the vm_ssh_keys
      const vm_ssh_keys = [];
      // always add the admin
      const adminCreds = sails.config.workspacetype[recType].vm_admin_credentials;
      if (!_.isEmpty(adminCreds)) {
        // always expect admin creds to be a map
        vm_ssh_keys.push(_.isMap(adminCreds) ? adminCreds : JSON.parse(adminCreds) );
      }
      // build the user list
      vm_ssh_keys.push({
        user: record.metadata.user,
        key: record.metadata.key
      });
      inputMap['vm_description'] = record.metadata.description;
      inputMap['vm_ssh_keys'] = vm_ssh_keys;
      inputMap['vm_name'] = `${recType}-${oid}`;
      inputMap['vm_image'] = sails.config.workspacetype[recType].vm_image;
      inputMap['vm_type'] = sails.config.workspacetype[recType].vm_type;
      inputMap['vm_rdmp_oid'] = record.metadata.rdmpOid;
      inputMap['vm_workspace_oid'] = oid;
      return inputMap;
    }

    public getLocation(oid:string, record:any, recType:string) {
      if (recType == "terraform-gcp-linux") {
        const label = `IP Address: ${record.metadata.output.remote_public_ip.value}, User: ${record.metadata.user}`;
        const sshUrl = `ssh://${record.metadata.user}@${record.metadata.output.remote_public_ip.value}`;
        return {
          label: label,
          link: sshUrl
        }
      } else if (recType == "terraform-gcp-omeka") {
        const omekaUrl = `http://${record.metadata.output.remote_public_ip.value}`;
        const label = `Omeka URL: ${omekaUrl}, SSH User: ${record.metadata.user}`;
        return {
          label: label,
          link: omekaUrl
        }
      }
      return record.metadata.location;
    }
  }
}
module.exports = new Services.TfGcpService().exports();
