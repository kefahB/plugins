declare class SAMKeychain {

    passwordForService(name: string, service: string): Function;
    setPasswordForService(name: string, service: string): Function;
};