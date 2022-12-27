/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module phone {
							export class SmsCodeAutofillClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.phone.SmsCodeAutofillClient>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.phone.SmsCodeAutofillClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									checkPermissionState(): com.google.android.gms.tasks.Task<java.lang.Integer>;
									hasOngoingSmsRequest(param0: string): com.google.android.gms.tasks.Task<java.lang.Boolean>;
									startSmsCodeRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
								});
								public constructor();
								public startSmsCodeRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public checkPermissionState(): com.google.android.gms.tasks.Task<java.lang.Integer>;
								public hasOngoingSmsRequest(param0: string): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							}
							export module SmsCodeAutofillClient {
								export class PermissionState {
									public static class: java.lang.Class<com.google.android.gms.auth.api.phone.SmsCodeAutofillClient.PermissionState>;
									/**
									 * Constructs a new instance of the com.google.android.gms.auth.api.phone.SmsCodeAutofillClient$PermissionState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
									public static GRANTED: number;
									public static NONE: number;
									public static DENIED: number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module phone {
							export class SmsCodeBrowserClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.phone.SmsCodeBrowserClient>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.phone.SmsCodeBrowserClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									startSmsCodeRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
								});
								public constructor();
								public startSmsCodeRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module phone {
							export class SmsCodeRetriever {
								public static class: java.lang.Class<com.google.android.gms.auth.api.phone.SmsCodeRetriever>;
								public static SMS_CODE_RETRIEVED_ACTION: string;
								public static EXTRA_SMS_CODE: string;
								public static EXTRA_SMS_CODE_LINE: string;
								public static EXTRA_STATUS: string;
								public static getAutofillClient(param0: globalAndroid.app.Activity): com.google.android.gms.auth.api.phone.SmsCodeAutofillClient;
								public static getBrowserClient(param0: globalAndroid.app.Activity): com.google.android.gms.auth.api.phone.SmsCodeBrowserClient;
								public static getAutofillClient(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.phone.SmsCodeAutofillClient;
								public static getBrowserClient(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.phone.SmsCodeBrowserClient;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module phone {
							export class SmsRetriever {
								public static class: java.lang.Class<com.google.android.gms.auth.api.phone.SmsRetriever>;
								public static SEND_PERMISSION: string;
								public static SMS_RETRIEVED_ACTION: string;
								public static EXTRA_SMS_MESSAGE: string;
								public static EXTRA_STATUS: string;
								public static EXTRA_CONSENT_INTENT: string;
								public static EXTRA_SIM_SUBSCRIPTION_ID: string;
								public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.phone.SmsRetrieverClient;
								public static getClient(param0: globalAndroid.app.Activity): com.google.android.gms.auth.api.phone.SmsRetrieverClient;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module phone {
							export class SmsRetrieverApi {
								public static class: java.lang.Class<com.google.android.gms.auth.api.phone.SmsRetrieverApi>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.phone.SmsRetrieverApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									startSmsRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
									startSmsUserConsent(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
								});
								public constructor();
								public startSmsRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public startSmsUserConsent(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module phone {
							export abstract class SmsRetrieverClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> implements com.google.android.gms.auth.api.phone.SmsRetrieverApi  {
								public static class: java.lang.Class<com.google.android.gms.auth.api.phone.SmsRetrieverClient>;
								public constructor(param0: globalAndroid.app.Activity);
								public startSmsRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public startSmsUserConsent(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
								public constructor(param0: globalAndroid.content.Context);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module phone {
							export class SmsRetrieverStatusCodes {
								public static class: java.lang.Class<com.google.android.gms.auth.api.phone.SmsRetrieverStatusCodes>;
								public static PLATFORM_NOT_SUPPORTED: number;
								public static API_NOT_AVAILABLE: number;
								public static USER_PERMISSION_REQUIRED: number;
								public static getStatusCodeString(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module phone {
							export class zza extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.authApiPhone.zzw,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.phone.zza>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zza>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzaa extends com.google.android.gms.internal.authApiPhone.zzi {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzaa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzab extends com.google.android.gms.auth.api.phone.SmsRetrieverClient {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzab>;
							public startSmsRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
							public startSmsUserConsent(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
							public constructor(param0: globalAndroid.app.Activity);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzac {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzac>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzb>;
							public asBinder(): globalAndroid.os.IBinder;
							public constructor(param0: string);
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export abstract class zzd extends com.google.android.gms.internal.authApiPhone.zzb implements com.google.android.gms.internal.authApiPhone.zze {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzd>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zze {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zze>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.authApiPhone.zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: com.google.android.gms.common.api.Status, param1: number): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export abstract class zzf extends com.google.android.gms.internal.authApiPhone.zzb implements com.google.android.gms.internal.authApiPhone.zzg {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzf>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzg {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzg>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.authApiPhone.zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: com.google.android.gms.common.api.Status, param1: boolean): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzh extends com.google.android.gms.internal.authApiPhone.zza {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export abstract class zzi extends com.google.android.gms.internal.authApiPhone.zzb implements com.google.android.gms.internal.authApiPhone.zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzi>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.authApiPhone.zzj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: com.google.android.gms.common.api.Status): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzk {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzk>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzl {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzl>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzm {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzm>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzn extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.authApiPhone.zzw,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzo {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzo>;
							public onResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzp extends com.google.android.gms.internal.authApiPhone.zzd {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzq extends com.google.android.gms.internal.authApiPhone.zzf {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzr extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> implements com.google.android.gms.auth.api.phone.SmsCodeAutofillClient  {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzr>;
							public checkPermissionState(): com.google.android.gms.tasks.Task<java.lang.Integer>;
							public hasOngoingSmsRequest(param0: string): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public constructor(param0: globalAndroid.app.Activity);
							public startSmsCodeRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzs {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzs>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzt extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.authApiPhone.zzw,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzu>;
							public onResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzv extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> implements com.google.android.gms.auth.api.phone.SmsCodeBrowserClient  {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzv>;
							public constructor(param0: globalAndroid.app.Activity);
							public startSmsCodeRetriever(): com.google.android.gms.tasks.Task<java.lang.Void>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzw extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.authApiPhone.zzh>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzw>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.internal.ConnectionCallbacks, param4: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public usesClientTelemetry(): boolean;
							public getStartServiceAction(): string;
							public getMinApkVersion(): number;
							public getServiceDescriptor(): string;
							public getApiFeatures(): native.Array<com.google.android.gms.common.Feature>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzx {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzx>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzy {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzy>;
							public accept(param0: any, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module authApiPhone {
						export class zzz extends com.google.android.gms.internal.authApiPhone.zzi {
							public static class: java.lang.Class<com.google.android.gms.internal.authApiPhone.zzz>;
						}
					}
				}
			}
		}
	}
}

//Generics information:

