"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rx_1 = require("rxjs/Rx");
const services = require("../core/CoreService.js");
var Services;
(function (Services) {
    class TfGcpService extends services.Services.Core.Service {
        constructor() {
            super(...arguments);
            this._exportedMethods = [
                'bootstrap',
                'getInputMap',
                'getLocation'
            ];
        }
        bootstrap() {
            return Rx_1.Observable.of("");
        }
        getInputMap(oid, record) {
            const inputMap = {};
            const recType = record.metaMetadata.type;
            const vm_ssh_keys = [];
            if (!_.isEmpty(sails.config.workspacetype[recType].vm_admin_credentials)) {
                vm_ssh_keys.push(sails.config.workspacetype[recType].vm_admin_credentials);
            }
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
        getLocation(oid, record, recType) {
            if (recType == "terraform-gcp-linux") {
                const label = `IP Address: ${record.metadata.output.remote_public_ip.value}, User: ${record.metadata.user}`;
                const sshUrl = `ssh://${record.metadata.user}@${record.metadata.output.remote_public_ip.value}`;
                return {
                    label: label,
                    link: sshUrl
                };
            }
            return record.metadata.location;
        }
    }
    Services.TfGcpService = TfGcpService;
})(Services = exports.Services || (exports.Services = {}));
module.exports = new Services.TfGcpService().exports();
