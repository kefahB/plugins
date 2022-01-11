
declare module SAMKeychain {
    const kSAMKeychainErrorDomain: string;
    const kSAMKeychainAccountKey: string;
    const kSAMKeychainCreatedAtKey: string;
    const kSAMKeychainClassKey: string;
    const kSAMKeychainDescriptionKey: string;
    const kSAMKeychainLabelKey: string;
    const kSAMKeychainLastModifiedKey: string;
    const kSAMKeychainWhereKey: string;
    constructor();
    function passwordForServiceAccount(name: string, service: string): string;
    function setPasswordForServiceAccount(name: string, value: string, service: string): boolean;
};