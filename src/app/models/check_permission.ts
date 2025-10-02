export interface PermissionCheckResponse {
  /** True if the user has the requested permission */
  isAllowed: boolean;

  /** Optional explanatory message from the server (e.g. "Allowed" / "Not allowed") */
  message: string;
}