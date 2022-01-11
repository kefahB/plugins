declare interface SAMKeychainInterface {
    passwordForService(name: string, service: string): Function;
    setPassword(name: string, service: string): Function;
}

declare class SAMKeychain extends SAMKeychainInterface {

    passwordForService(name: string, service: string): Function;
    setPassword(name: string, service: string): Function;
};