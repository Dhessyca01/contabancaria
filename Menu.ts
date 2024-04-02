import readlinesync = require("readline-sync");
import { Conta } from "./src/modelo/Conta";
import { ContaCorrente } from "./src/modelo/ContaCorrente";
import { ContaPoupanca } from "./src/modelo/ContaPoupanc";
import { colors } from "./src/util/Colors";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    
    let opção, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    //Classe ContaController
    const contas: ContaController = new ContaController();

    const contaCorrente: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 456, 1, "Dhessyca Sousa", 500000, 1000)
    contas.cadastrar(contaCorrente);

    
    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);
    
    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);
    
    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);
    
    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);
    
    contas.listarTodas();

    let opcao: number;
    

   // Objeto da Classe ContaCorrente
    const contacorrente: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123453, 1, "Jose", 1345000, 145060);
    contacorrente.visualizar();
    contacorrente.sacar(2234);
    contacorrente.visualizar();
    contacorrente.depositar(76548);
    contacorrente.visualizar();


    // Objeto da Classe ContaPoupanca 
    const contapoupanca: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 445678, 2, "Victor", 9876567, 66765);
    contapoupanca.visualizar();
    contapoupanca.sacar(100000);
    contapoupanca.visualizar();
    contapoupanca.depositar(25000);
    contapoupanca.visualizar();

    while (true) {


        console.log(colors.bg.cyan, colors.fg.bluestrong,)
        console.log("*************************************************************");
        console.log("                                                             ");
        console.log("  BANCO DS - Inovação que conta. O TEC que faz a diferença!  ");
        console.log("                                                             ");
        console.log("********************************************************* ***");
        console.log("                                                             ");
        console.log("            1 - Criar Conta                                  ");
        console.log("            2 - Listar todas as Contas                       ");
        console.log("            3 - Buscar Conta por Numero                      ");
        console.log("            4 - Atualizar Dados da Conta                     ");
        console.log("            5 - Apagar Conta                                 ");
        console.log("            6 - Sacar                                        ");
        console.log("            7 - Depositar                                    ");
        console.log("            8 - Transferir valores entre Contas              ");
        console.log("            9 - Sair                                         ");
        console.log("                                                             ");
        console.log("*************************************************************");
        console.log("                                                             ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.crimson,
                "\nBanco DS - Inovação que conta. O TEC que faz a diferença!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

                console.log("Digite o número da agência: ");
                agencia = readlinesync.questionInt(" ");

                console.log("Digite o Nome do titular da conta: ");
                titular = readlinesync.question(" ");

                console.log("\nDigite o tipo da conta: ");
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) +1;

                console.log("\nDigite o Saldo da conta (R$): ");
                saldo = readlinesync.questionFloat(" ");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta (R$): ");
                        limite = readlinesync.questionFloat(" ");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia,
                            tipo, titular, saldo, limite));
                            break;
                    
                    case 2: console.log("Digite o Dia do aniversário da conta poupança: ");
                    aniversario = readlinesync.questionInt("");
                    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia,
                    tipo, titular, saldo, aniversario));
                    break;
                }

                keyPress()
                break;

               
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);

                contas.listarTodas();

                
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n"
                    , colors.reset);

                    console.log("Digite o número da conta: ");
                    numero = readlinesync.questionInt("");
                    contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                    console.log("Digite o número da conta: ");
                    numero = readlinesync.questionInt("");

                    let conta = contas.buscarNoArray(numero);

                    if (conta != null) {

                        console.log("Digite o número da agência: ");
                        agencia = readlinesync.questionInt("");

                        console.log("Digite o nome do Titular da conta: ");
                        titular = readlinesync.question("");

                        tipo = conta.tipo;

                        console.log("\nDigite o Saldo da conta (R$): ");
                        saldo = readlinesync.questionFloat("");

                        switch (tipo) {
                            case 1: 
                            console.log("Digite o Limite da Conta (R$) ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                                break;

                            case 2:
                                console.log("Digite o Dia do aniversário da Conta Poupança: ");
                                aniversario = readlinesync.questionInt("");
                                contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo,
                                    aniversario));
                                    break;
                        }
                    } else{
                        console.log(colors.fg.red, "\nA conta número: " + numero +
                        "Não foi encontrada!", colors.reset);
                    }

                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                    console.log ("Digite o número da Conta: ");
                    numero = readlinesync.questionInt("");
                    contas.deletar(numero);

                keyPress()
                break;

            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt ("");

                console.log("\nDigite o valor do Saque (R$): ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);


                keyPress()
                break;

            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);

                    console.log("Digite o número da Conta: ");
                    numero = readlinesync.questionInt("");

                    console.log("\nDigite o valor do Depósito (R$): ");
                    valor = readlinesync.questionFloat("");

                    contas.depositar(numero, valor);

                keyPress()
                break;

            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                    console.log("Digite o número da Conta de Origem: ");
                    numero = readlinesync.questionInt("");

                    console.log("Digite o número da Conta de Destino: ");
                    numeroDestino = readlinesync.questionInt("");

                    console.log("\nDigite o valor do Depósito (R$): ");
                    valor = readlinesync.questionFloat("");

                    contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;

                case 9:
                    console.log(colors.fg.whitestrong,
                        "\n\nConsultar conta por titular\n\n", colors.reset);
    
                        console.log("Digite o Nome do Titular: ")
                        titular = readlinesync.question("")
    
                        contas.procurarPorTitular(titular);
    
                        keyPress();
                break;

            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    
    
    }

}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Dhessyca Karolainy da Conceição Sousa");
    console.log("Dhessyca Sousa - dhessyca.pessoal@gmail.com");
    console.log("https://github.com/Dhessyca01/contabancaria/blob/main/Menu.ts");
    console.log("*****************************************************");

}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();