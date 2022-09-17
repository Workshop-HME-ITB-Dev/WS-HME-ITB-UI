export interface LoginAdminInput {
  createLoginInput: {
    email: string;
    password: string;
  };
}

export interface LoginAdminResponse {
  login: {
    accessToken: string;
    admin: {
      id: number;
      createdAt: Date;
      email: string;
      name: string;
    };
  };
}

// Admin Register
export interface CreateAdminInput {
  createAdminInput: {
    email: string;
    name: string;
    password: string;
  };
}

export interface CreateAdminResponse {
  createAdmin: {
    id: number;
    name: string;
    email: string;
    createdAt: string;
  };
}

// Get Admin

export interface GetAdminResponse {
  admin: {
    id: number;
    createdAt: Date;
    email: string;
    name: string;
  };
}

//  Get Admins

export interface GetAllAdminsReponse {
  admins: GetAdminResponse[];
}
