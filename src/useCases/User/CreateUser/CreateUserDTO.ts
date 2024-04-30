export interface CreateUserRequestDTO {
  email: string;
  password: string;
}

export interface CreateUserResponseDTO {
  status: boolean;
  message: string;
}
