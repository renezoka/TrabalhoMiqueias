class usuario {
    constructor(item1, item2, item3, item4, item5, item6, item7, item8) {
        this.item1 = item1;
        this.item2 = item2;
        this.item3 = item3;
        this.item4 = item4;
        this.item5 = item5;
        this.item6 = item6;
        this.item7 = item7;
        this.item8 = item8;
    }

    atividadeUsuario06() {
        if (this.item6) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }

    atividadeUsuario03() {
        if (this.item3 === "admin") {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica o número de usuários com a role de admin
function verificarQuatidadeAdmins(users) {
    let item3 = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].item3 === "admin") {
            item3++;
        }
    }
    return item3;
}

// Deixe a função clara para que seja possível de compreender que ela verifica se o número de tentativas de login é excessivo
function verificarTentativas(item1, item2) {
    if (item1.item7 > item2) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica qual usuário logou mais recentemente
function loginUsarioData(usuario1, usuarios2) {
    if (usuario1.item5 > usuario2.item5) {
        return `${usuario1.item1  } logou mais recentemente.`;
    } else {
        return `${usuarios2.item2  } logou mais recentemente.`;
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica se o usuário foi criado recentemente
function datausuario(user) {
    const now = new Date();
    const numerodeusuarios = 31536000000;
    if (now - user.item4 < numerodeusuarios) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

const ususarios = [
    new usuario("Carlos", 25, "admin", new Date(2023, 1, 15), new Date(2024, 8, 1), true, 100, 2),
    new usuario("Ana", 30, "guest", new Date(2020, 4, 22), new Date(2024, 7, 31), true, 50, 3),
    new usuario("José", 29, "admin", new Date(2022, 10, 5), new Date(2024, 6, 10), false, 200, 5),
    new usuario("Maria", 35, "guest", new Date(2021, 2, 10), new Date(2023, 12, 25), false, 80, 7)
];

console.log(`Usuários admin: ${  (ususarios)}`);

ususarios[0].atividadeUsuario06();
ususarios[1].atividadeUsuario03();

verificarTentativas(ususarios[2], 4);

console.log((ususarios[0], ususarios[3]));

resultado(ususarios[3]);
