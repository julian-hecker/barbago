export interface ISettings {
  notifications: INotificationSettings;
  // preferences: IPreferenceSettings;
  personal?: IPersonalSettings
}

export interface INotificationSettings {
  pushNotifications: boolean;
  emailNotifications: boolean;
  messageNotifications: boolean;
}

// export interface IPreferenceSettings {
//   darkMode: boolean;
// }

// Probably gotta configure this using Stripe Connect
// https://dashboard.stripe.com/connect/accounts/overview
export interface IPaymentSettings {}

export interface IPersonalSettings {
  name: string;
  email: string;
  picture?: string;
}
