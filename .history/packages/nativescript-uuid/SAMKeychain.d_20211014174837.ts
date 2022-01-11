declare interface SAMKeychainInterface {
    passwordForService(name: string, service: string): Function;
    setPassword(name: string, service: string): Function;
}

declare class SAMKeychain {

    passwordForService(name: string, service: string): Function;
    setPassword(name: string, service: string): Function;
};