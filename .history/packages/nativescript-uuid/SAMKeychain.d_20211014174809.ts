declare class SAMKeychain {

    passwordForService(name: string, service: string): Function;
    setPassword(name: string, service: string): Function;
};