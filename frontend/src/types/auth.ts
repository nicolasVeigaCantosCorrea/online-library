export type SignupData = {
  name: string;
  email: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

// This is the same return as signup.
export type LoginResponse = {
  user: {
    id: number;
    name: string;
    email: string;
    is_admin: boolean;
  };
  token_access: string;
};
