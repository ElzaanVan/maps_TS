import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const mapOne = new CustomMap("map");

mapOne.addUserMarker(user);
mapOne.addCompanyMarker(company);