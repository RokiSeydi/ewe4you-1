import { defaults } from "jest-config";

export default {
    ...defaults, 
    moduleFileExtensions: [...defaults.moduleFileExtensions, ".d.ts"]
}