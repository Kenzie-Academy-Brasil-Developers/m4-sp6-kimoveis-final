import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import categoriesRoutes from "./routes/categories.routes";
import loginRoutes from "./routes/login.routes";
import realEstateRoutes from "./routes/realEstate.routes";
import schedulesRoutes from "./routes/schedules.routes";
import userRoutes from "./routes/user.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", schedulesRoutes);

app.use(handleErrors);

export default app;

//------------------------------------------------------------- TODO ROTAS :

// ------------------ POST/users ------------------

// // ------------------GET/users ------------------
// DEVE RETORNAR O DELETEDAT DO USER DELETADO
// nao retornar senha do usuario

/* ------------------PATCH/users/:id ------------------ 
PATCH PERMITIR MANDAR MESMO EMAIL DESDE QUE SEJA DO MESMO USER
*/

/* ------------------DELETE/users/:id ------------------

*/

/* ------------------POST/login------------------
 */

/*  
------------------POST/categories------------------
tipar criacao
*/

// ------------------GET/categories------------------

/* 
 GET - /categories/:id/realEstate
Rota deve listar todos os imóveis que pertencem a uma categoria.
 A rota não precisa de autenticação para ser acessada.
*/

/* ----------------POST - /realEstate------------------
Não podem ser cadastrados dois imóveis com o mesmo endereço.
*/

/*
 ------------------ GET - /realEstate------------------
fazendo join com address
*/

/*
------------------POST - /schedules------------------
Não pode ser possível agendar uma visita a um imóvel com a mesma data e hora, essa verificação deve ser implementada com query builder.
Não pode ser possível um usuário agendar uma visita a 2 imóveis diferentes com a mesma data e hora, essa verificação deve ser implementada com query builder.
Só deve ser possível agendar uma visita durante horário comercial (08:00 as 18:00).
Só deve ser possível agendar uma visita durante em dias úteis (segunda à sexta).
ver sobre ondelete cascade
*/

/*
 ------------------GET - /schedules/realEstate/:id------------------
Rota deve listar todos os agendamentos de um imóvel.
A rota pode ser acessada apenas por administradores.



*/

//--------------------------------------------------------TODO BOAS PRATICAS
// TIPAR CORRETAMENTE DADOS
//APLICAR BONS HABITOS NO CODGIO
//identar cofigo

//--------------------------------------------------------TODO TESTES
//users
// createUser;
//----retorno do create nao ta funcionando

// destroyUser;
//-----problema com tipgaem nao ta lendo nenhum test

// readUser;
//----

// updateUser;
//-----problema com tipgaem nao ta lendo nenhum test

//sessions // login
//createSession
//---- 2 testes nao estao

//schedules

//realEstates

//categories
