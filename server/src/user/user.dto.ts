import {
  IsNumber,
  IsString,
  IsEmail,
  IsBoolean,
  IsDate,
  IsOptional,
  ValidateNested,
} from "class-validator";
import AuthorityDto from "../authorities/authoritie.dto";
class UserDto {
  @IsString()
  public username: string;
  @IsString()
  public firstName: string;
  @IsString()
  public lastName: string;
  @IsString()
  public name: string;
  @IsEmail()
  public email: string;
  @IsString()
  public imageUrl: string;
  @IsBoolean()
  public activated: boolean;
  @IsString()
  public langKey: string;
  @IsString()
  public createdBy: string;
  @IsDate()
  public createdDate: Date;
  @IsOptional()
  @ValidateNested()
  public authorities: AuthorityDto;
  @IsNumber()
  public photoDocumentId: number;
  @IsNumber()
  public couvertureDocumentId: number;
}

export default UserDto;
