declare interface SAMKeychain {
    passwordForService: (name: string, service: string) => string;
    setPassword: (name: string, service: string) => string;
}