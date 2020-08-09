/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from './IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.ts';
import { IoK8sApiCoreV1AzureDiskVolumeSource } from './IoK8sApiCoreV1AzureDiskVolumeSource.ts';
import { IoK8sApiCoreV1AzureFilePersistentVolumeSource } from './IoK8sApiCoreV1AzureFilePersistentVolumeSource.ts';
import { IoK8sApiCoreV1CSIPersistentVolumeSource } from './IoK8sApiCoreV1CSIPersistentVolumeSource.ts';
import { IoK8sApiCoreV1CephFSPersistentVolumeSource } from './IoK8sApiCoreV1CephFSPersistentVolumeSource.ts';
import { IoK8sApiCoreV1CinderPersistentVolumeSource } from './IoK8sApiCoreV1CinderPersistentVolumeSource.ts';
import { IoK8sApiCoreV1FCVolumeSource } from './IoK8sApiCoreV1FCVolumeSource.ts';
import { IoK8sApiCoreV1FlexPersistentVolumeSource } from './IoK8sApiCoreV1FlexPersistentVolumeSource.ts';
import { IoK8sApiCoreV1FlockerVolumeSource } from './IoK8sApiCoreV1FlockerVolumeSource.ts';
import { IoK8sApiCoreV1GCEPersistentDiskVolumeSource } from './IoK8sApiCoreV1GCEPersistentDiskVolumeSource.ts';
import { IoK8sApiCoreV1GlusterfsPersistentVolumeSource } from './IoK8sApiCoreV1GlusterfsPersistentVolumeSource.ts';
import { IoK8sApiCoreV1HostPathVolumeSource } from './IoK8sApiCoreV1HostPathVolumeSource.ts';
import { IoK8sApiCoreV1ISCSIPersistentVolumeSource } from './IoK8sApiCoreV1ISCSIPersistentVolumeSource.ts';
import { IoK8sApiCoreV1LocalVolumeSource } from './IoK8sApiCoreV1LocalVolumeSource.ts';
import { IoK8sApiCoreV1NFSVolumeSource } from './IoK8sApiCoreV1NFSVolumeSource.ts';
import { IoK8sApiCoreV1ObjectReference } from './IoK8sApiCoreV1ObjectReference.ts';
import { IoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from './IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.ts';
import { IoK8sApiCoreV1PortworxVolumeSource } from './IoK8sApiCoreV1PortworxVolumeSource.ts';
import { IoK8sApiCoreV1QuobyteVolumeSource } from './IoK8sApiCoreV1QuobyteVolumeSource.ts';
import { IoK8sApiCoreV1RBDPersistentVolumeSource } from './IoK8sApiCoreV1RBDPersistentVolumeSource.ts';
import { IoK8sApiCoreV1ScaleIOPersistentVolumeSource } from './IoK8sApiCoreV1ScaleIOPersistentVolumeSource.ts';
import { IoK8sApiCoreV1StorageOSPersistentVolumeSource } from './IoK8sApiCoreV1StorageOSPersistentVolumeSource.ts';
import { IoK8sApiCoreV1VolumeNodeAffinity } from './IoK8sApiCoreV1VolumeNodeAffinity.ts';
import { IoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from './IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.ts';
import { HttpFile } from '../http/http.ts';

/**
* PersistentVolumeSpec is the specification of a persistent volume.
*/
export class IoK8sApiCoreV1PersistentVolumeSpec {
    /**
    * AccessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
    */
    'accessModes'?: Array<string>;
    'awsElasticBlockStore'?: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
    'azureDisk'?: IoK8sApiCoreV1AzureDiskVolumeSource;
    'azureFile'?: IoK8sApiCoreV1AzureFilePersistentVolumeSource;
    /**
    * A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
    */
    'capacity'?: { [key: string]: string; };
    'cephfs'?: IoK8sApiCoreV1CephFSPersistentVolumeSource;
    'cinder'?: IoK8sApiCoreV1CinderPersistentVolumeSource;
    'claimRef'?: IoK8sApiCoreV1ObjectReference;
    'csi'?: IoK8sApiCoreV1CSIPersistentVolumeSource;
    'fc'?: IoK8sApiCoreV1FCVolumeSource;
    'flexVolume'?: IoK8sApiCoreV1FlexPersistentVolumeSource;
    'flocker'?: IoK8sApiCoreV1FlockerVolumeSource;
    'gcePersistentDisk'?: IoK8sApiCoreV1GCEPersistentDiskVolumeSource;
    'glusterfs'?: IoK8sApiCoreV1GlusterfsPersistentVolumeSource;
    'hostPath'?: IoK8sApiCoreV1HostPathVolumeSource;
    'iscsi'?: IoK8sApiCoreV1ISCSIPersistentVolumeSource;
    'local'?: IoK8sApiCoreV1LocalVolumeSource;
    /**
    * A list of mount options, e.g. [\"ro\", \"soft\"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
    */
    'mountOptions'?: Array<string>;
    'nfs'?: IoK8sApiCoreV1NFSVolumeSource;
    'nodeAffinity'?: IoK8sApiCoreV1VolumeNodeAffinity;
    /**
    * What happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
    */
    'persistentVolumeReclaimPolicy'?: string;
    'photonPersistentDisk'?: IoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
    'portworxVolume'?: IoK8sApiCoreV1PortworxVolumeSource;
    'quobyte'?: IoK8sApiCoreV1QuobyteVolumeSource;
    'rbd'?: IoK8sApiCoreV1RBDPersistentVolumeSource;
    'scaleIO'?: IoK8sApiCoreV1ScaleIOPersistentVolumeSource;
    /**
    * Name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
    */
    'storageClassName'?: string;
    'storageos'?: IoK8sApiCoreV1StorageOSPersistentVolumeSource;
    /**
    * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
    */
    'volumeMode'?: string;
    'vsphereVolume'?: IoK8sApiCoreV1VsphereVirtualDiskVolumeSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessModes",
            "baseName": "accessModes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "awsElasticBlockStore",
            "baseName": "awsElasticBlockStore",
            "type": "IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource",
            "format": ""
        },
        {
            "name": "azureDisk",
            "baseName": "azureDisk",
            "type": "IoK8sApiCoreV1AzureDiskVolumeSource",
            "format": ""
        },
        {
            "name": "azureFile",
            "baseName": "azureFile",
            "type": "IoK8sApiCoreV1AzureFilePersistentVolumeSource",
            "format": ""
        },
        {
            "name": "capacity",
            "baseName": "capacity",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "cephfs",
            "baseName": "cephfs",
            "type": "IoK8sApiCoreV1CephFSPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "cinder",
            "baseName": "cinder",
            "type": "IoK8sApiCoreV1CinderPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "claimRef",
            "baseName": "claimRef",
            "type": "IoK8sApiCoreV1ObjectReference",
            "format": ""
        },
        {
            "name": "csi",
            "baseName": "csi",
            "type": "IoK8sApiCoreV1CSIPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "fc",
            "baseName": "fc",
            "type": "IoK8sApiCoreV1FCVolumeSource",
            "format": ""
        },
        {
            "name": "flexVolume",
            "baseName": "flexVolume",
            "type": "IoK8sApiCoreV1FlexPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "flocker",
            "baseName": "flocker",
            "type": "IoK8sApiCoreV1FlockerVolumeSource",
            "format": ""
        },
        {
            "name": "gcePersistentDisk",
            "baseName": "gcePersistentDisk",
            "type": "IoK8sApiCoreV1GCEPersistentDiskVolumeSource",
            "format": ""
        },
        {
            "name": "glusterfs",
            "baseName": "glusterfs",
            "type": "IoK8sApiCoreV1GlusterfsPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "hostPath",
            "baseName": "hostPath",
            "type": "IoK8sApiCoreV1HostPathVolumeSource",
            "format": ""
        },
        {
            "name": "iscsi",
            "baseName": "iscsi",
            "type": "IoK8sApiCoreV1ISCSIPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "local",
            "baseName": "local",
            "type": "IoK8sApiCoreV1LocalVolumeSource",
            "format": ""
        },
        {
            "name": "mountOptions",
            "baseName": "mountOptions",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "nfs",
            "baseName": "nfs",
            "type": "IoK8sApiCoreV1NFSVolumeSource",
            "format": ""
        },
        {
            "name": "nodeAffinity",
            "baseName": "nodeAffinity",
            "type": "IoK8sApiCoreV1VolumeNodeAffinity",
            "format": ""
        },
        {
            "name": "persistentVolumeReclaimPolicy",
            "baseName": "persistentVolumeReclaimPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "photonPersistentDisk",
            "baseName": "photonPersistentDisk",
            "type": "IoK8sApiCoreV1PhotonPersistentDiskVolumeSource",
            "format": ""
        },
        {
            "name": "portworxVolume",
            "baseName": "portworxVolume",
            "type": "IoK8sApiCoreV1PortworxVolumeSource",
            "format": ""
        },
        {
            "name": "quobyte",
            "baseName": "quobyte",
            "type": "IoK8sApiCoreV1QuobyteVolumeSource",
            "format": ""
        },
        {
            "name": "rbd",
            "baseName": "rbd",
            "type": "IoK8sApiCoreV1RBDPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "scaleIO",
            "baseName": "scaleIO",
            "type": "IoK8sApiCoreV1ScaleIOPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "storageClassName",
            "baseName": "storageClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "storageos",
            "baseName": "storageos",
            "type": "IoK8sApiCoreV1StorageOSPersistentVolumeSource",
            "format": ""
        },
        {
            "name": "volumeMode",
            "baseName": "volumeMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "vsphereVolume",
            "baseName": "vsphereVolume",
            "type": "IoK8sApiCoreV1VsphereVirtualDiskVolumeSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PersistentVolumeSpec.attributeTypeMap;
    }
    
    public constructor() {
    }
}

