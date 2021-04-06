import { IsString } from "class-validator";

class AuthorityDto {
  @IsString()
  public authority: string;
}

export default AuthorityDto;
