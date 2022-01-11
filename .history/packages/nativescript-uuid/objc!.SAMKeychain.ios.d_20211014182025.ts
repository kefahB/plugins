
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
    function passwordForService(name: string, service: string): string;
    function setPassword(name: string, service: string): boolean;
};