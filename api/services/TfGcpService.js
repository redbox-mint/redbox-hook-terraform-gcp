"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = void 0;
const Rx_1 = require("rxjs/Rx");
const redbox_core_types_1 = require("@researchdatabox/redbox-core-types");
var Services;
(function (Services) {
    class TfGcpService extends redbox_core_types_1.Services.Core.Service {
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
            const adminCreds = sails.config.workspacetype[recType].vm_admin_credentials;
            if (!_.isEmpty(adminCreds)) {
                vm_ssh_keys.push(_.isMap(adminCreds) ? adminCreds : JSON.parse(adminCreds));
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
            else if (recType == "terraform-gcp-omeka") {
                const omekaUrl = `http://${record.metadata.output.remote_public_ip.value}`;
                const label = `Omeka URL: ${omekaUrl}, SSH User: ${record.metadata.user}`;
                return {
                    label: label,
                    link: omekaUrl
                };
            }
            return record.metadata.location;
        }
    }
    Services.TfGcpService = TfGcpService;
})(Services = exports.Services || (exports.Services = {}));
module.exports = new Services.TfGcpService().exports();
