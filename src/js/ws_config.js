var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'WalletShell';
config.appDescription = 'Hitrust  HITC Wallet';
config.appSlogan = '';
config.appId = '';
config.appGitRepo = 'https://github.com/HITHELPINSURANCETRUST/hitc-wallet-electron';

// default port number for your daemon (e.g. HITd)
config.daemonDefaultRpcPort = 11211;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'twl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'HIT-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v0.0.1";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://hitcex.cryptomine.cx/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'node.hitrust.id';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'https://github.com/HITHELPINSURANCETRUST/hitc-nodes-json';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'node.hitrust.id:11211',
];

// your currency name
config.assetName = 'HITC';
// your currency ticker
config.assetTicker = 'HITC';
// your currency address prefix, for address validation
config.addressPrefix = 'hi';
// standard wallet address length, for address validation
config.addressLength = 97;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 187;

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 10000;
// to represent human readable value
config.decimalPlaces = 2;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'Hon',
    address: 'hi2pDASryyvNHKQQzKT8oPNqdrTwQiLgpJ5mBxzwiq9v9NGDLgNdUSDKWTm4TGonoMG4PPMjDYN8mHKzj4zgGJYN31yL5rf6N',
  },  
];

module.exports = config;
