import { z } from "zod";
import { createLoginSchema } from "../schemas/login.schema";

type Ilogin = z.infer<typeof createLoginSchema>;

export { Ilogin };
