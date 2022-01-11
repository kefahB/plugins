declare interface SAMKeychain {
    passwordForService: (name: string, service: string) => ?string;
    setPassword: (name: string, service: string) => boolean;
}

declare class SAMKeychain extends SAMKeychainInterface {
    passwordForService: (name: string, service: string) => ?string;
    setPassword: (name: string, service: string) => boolean;
};