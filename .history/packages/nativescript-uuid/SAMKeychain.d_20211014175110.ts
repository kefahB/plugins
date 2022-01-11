declare interface SAMKeychain {
    passwordForService: (name: string, service: string) => string;
    setPassword: (name: string, service: string) => string;
}

declare class SAMKeychain extends SAMKeychainInterface {

    passwordForService(name: string, service: string): Function;
    setPassword(name: string, service: string): Function;
};