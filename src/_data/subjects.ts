import Subject from "@/_infra/entities/Subject";
import {SubjectState} from "@/_infra/enums/SubjectState";
import {SubjectType} from "@/_infra/enums/SubjectType";

const subjects: Subject[] = [
    {
        code: "COM06847",
        period: 1,
        name: "INTRODUÇÃO À INFORMÁTICA",
        requirements: [],
        type: SubjectType.MANDATORY,
        state: SubjectState.ONGOING
    },
    {
        code: "COM06852",
        period: 1,
        name: "INTRODUÇÃO AOS SISTEMAS DE INFORMAÇÃO",
        requirements: [],
        type: SubjectType.MANDATORY,
        state: SubjectState.ONGOING
    },
    {
        code: "COM06853",
        period: 1,
        name: "LÓGICA COMPUTACIONAL",
        requirements: [],
        type: SubjectType.MANDATORY,
        state: SubjectState.ONGOING
    },
    {
        code: "ENG06854",
        period: 1,
        name: "PORTUGUÊS INSTRUMENTAL",
        requirements: [],
        type: SubjectType.MANDATORY,
        state: SubjectState.ONGOING
    },
    {
        code: "COM06842",
        period: 1,
        name: "PROGRAMAÇÃO I",
        requirements: [],
        type: SubjectType.MANDATORY,
        state: SubjectState.DONE
    },
    {
        code: "MPA06840",
        period: 1,
        name: "VETORES E GEOMETRIA ANALÍTICA",
        requirements: [],
        type: SubjectType.MANDATORY,
        state: SubjectState.DONE
    },
    {
        code: "MPA06839",
        period: 2,
        name: "CÁLCULO A",
        requirements: [],
        type: SubjectType.MANDATORY,
        state: SubjectState.DONE
    },
    {
        code: "ENG06849",
        period: 2,
        name: "INGLÊS INSTRUMENTAL",
        requirements: [],
        type: SubjectType.MANDATORY,
        state: SubjectState.ONGOING
    },
    {
        code: "COM06851",
        period: 2,
        name: "MATEMÁTICA DISCRETA",
        requirements: [],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM06985",
        period: 2,
        name: "TEORIA GERAL DOS SISTEMAS",
        requirements: ["COM06852"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM06984",
        period: 2,
        name: "FUNDAMENTOS DE PROGRAMAÇÃO WEB",
        requirements: ["COM06847"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "MPA06855",
        period: 3,
        name: "ÁLGEBRA LINEAR",
        requirements: ["MPA06840"],
        type: SubjectType.MANDATORY,
        state: SubjectState.DONE
    },
    {
        code: "COM10014",
        period: 3,
        name: "COMPUTABILIDADE E COMPLEXIDADE",
        requirements: ["COM06851"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10015",
        period: 3,
        name: "ENGENHARIA DE SOFTWARE",
        requirements: ["COM06842"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM06992",
        period: 3,
        name: "ESTRUTURAS DE DADOS I",
        requirements: ["COM06842"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10016",
        period: 3,
        name: "SISTEMAS DE APOIO À DECISÃO",
        requirements: ["COM06985"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10076",
        period: 4,
        name: "ARQUITETURA DE COMPUTADORES",
        requirements: ["COM06842"],
        type: SubjectType.MANDATORY,
        state: SubjectState.ONGOING
    },
    {
        code: "ENG05510",
        period: 4,
        name: "ESTATÍSTICA BÁSICA",
        requirements: ["MPA06839"],
        type: SubjectType.MANDATORY,
        state: SubjectState.DONE
    },
    {
        code: "COM10078",
        period: 4,
        name: "ESTRUTURA DE DADOS II",
        requirements: ["COM06992"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10082",
        period: 4,
        name: "PROGRAMAÇÃO II",
        requirements: ["COM06992"],
        type: SubjectType.MANDATORY,
        state: SubjectState.DONE
    },
    {
        code: "COM10275",
        period: 4,
        name: "ENGENHARIA DE REQUISITOS DE SOFTWARE",
        requirements: ["COM10015"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10129",
        period: 5,
        name: "BANCO DE DADOS",
        requirements: ["COM10078"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10507",
        period: 5,
        name: "INTERFACE HUMANO-COMPUTADOR",
        requirements: ["COM10275"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10131",
        period: 5,
        name: "OTIMIZAÇÃO LINEAR",
        requirements: ["MPA06855", "COM06992"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10508",
        period: 5,
        name: "PROJETO DE SISTEMAS DE SOFTWARE",
        requirements: ["COM10275", "COM10082"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10132",
        period: 5,
        name: "SISTEMAS OPERACIONAIS",
        requirements: ["COM06992", "COM10076"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10603",
        period: 6,
        name: "DIREITO E LEGISLAÇÃO",
        requirements: [],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10733",
        period: 6,
        name: "GERÊNCIA DE PROJETO DE SOFTWARE",
        requirements: ["COM10015"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10081",
        period: 6,
        name: "METODOLOGIA DE PESQUISA EM INFORMÁTICA",
        requirements: ["ENG06854"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10393",
        period: 6,
        name: "MÉTODOS DE OTIMIZAÇÃO",
        requirements: ["COM10131"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10394",
        period: 6,
        name: "REDES DE COMPUTADORES",
        requirements: ["COM10132"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11014",
        period: 6,
        name: "GERENCIAMENTO DE BANCO DE DADOS",
        requirements: ["COM10129"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "CFM10426",
        period: 7,
        name: "ADMINISTRAÇÃO E ECONOMIA",
        requirements: [],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM06996",
        period: 7,
        name: "INFORMÁTICA E SOCIEDADE",
        requirements: ["COM06852"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11007",
        period: 7,
        name: "SEGURANÇA E AUDITORIA DE SISTEMAS",
        requirements: ["COM06985", "COM10733"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10616",
        period: 7,
        name: "SISTEMAS DISTRIBUÍDOS",
        requirements: ["COM10394"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10606",
        period: 7,
        name: "COMÉRCIO ELETRÔNICO",
        requirements: ["COM06984"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10396",
        period: 8,
        name: "DESENVOLVIMENTO DE SISTEMAS PARA WEB",
        requirements: ["COM10082", "COM10129"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10609",
        period: 8,
        name: "GERENCIAMENTO E ADMINISTRAÇÃO DE REDES",
        requirements: ["COM10394"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "CFM11061",
        period: 8,
        name: "EMPREENDEDORISMO",
        requirements: ["CFM10426"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11064",
        period: 8,
        name: "GESTÃO DE QUALIDADE DE SOFTWARE",
        requirements: ["COM10508"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11259",
        period: 9,
        name: "SISTEMAS DE SOFTWARE LIVRE",
        requirements: ["COM10132"],
        type: SubjectType.MANDATORY,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "VET10127",
        period: null,
        name: "Fundamentos da Língua Brasileira de Sinais - LIBRAS",
        requirements: [],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11013",
        period: null,
        name: "Mineração de Dados",
        requirements: ["ENG05510", "COM10129"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10605",
        period: null,
        name: "Banco de Dados Distribuídos",
        requirements: ["COM10129"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "MPA06979",
        period: null,
        name: "Cálculo B",
        requirements: ["MPA06839"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10607",
        period: null,
        name: "Computação Forense",
        requirements: ["MPA06855", "COM10394"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10604",
        period: null,
        name: "Computação Gráfica",
        requirements: ["MPA06855", "COM06992"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10608",
        period: null,
        name: "Computação Móvel",
        requirements: ["COM10394"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10397",
        period: null,
        name: "Fluxo em Redes",
        requirements: ["COM10131"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10398",
        period: null,
        name: "Interfaces e Periféricos",
        requirements: ["COM10076", "COM10132"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10392",
        period: null,
        name: "Linguagens de Programação",
        requirements: ["COM10082"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10080",
        period: null,
        name: "Lógica Computacional II",
        requirements: ["COM06853", "ENG05510"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10399",
        period: null,
        name: "Processamento Digital de Imagens",
        requirements: ["MPA06855", "COM06992"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10400",
        period: null,
        name: "Programação III",
        requirements: ["COM06842"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10133",
        period: null,
        name: "Teoria dos Grafos",
        requirements: ["COM10078"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10610",
        period: null,
        name: "Tópicos em Banco de Dados I",
        requirements: ["COM10129"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10611",
        period: null,
        name: "Tópicos Especiais em Engenharia de Software I",
        requirements: ["COM10015"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10614",
        period: null,
        name: "Tópicos Especiais em Otimização Combinatória I",
        requirements: ["COM10131"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "ENG10792",
        period: null,
        name: "Inteligência Artificial",
        requirements: ["COM06853", "COM06842"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10615",
        period: null,
        name: "Tópicos Especiais em Programação I",
        requirements: ["COM10082"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10613",
        period: null,
        name: "Tópicos Especiais em Redes de Computadores I",
        requirements: ["COM10394"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM10612",
        period: null,
        name: "Tópicos Especiais em Informática I",
        requirements: [],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11262",
        period: null,
        name: "Otimização Não-Linear",
        requirements: ["COM10131"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11263",
        period: null,
        name: "Tópicos Especiais em Banco de Dados II",
        requirements: ["COM10129"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11264",
        period: null,
        name: "Tópicos Especiais em Computação Gráfica II",
        requirements: ["COM10604"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11265",
        period: null,
        name: "Tópicos Especiais em Engenharia de Software II",
        requirements: ["COM10015"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11266",
        period: null,
        name: "Tópicos Especiais em Informática II",
        requirements: [],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11267",
        period: null,
        name: "Tópicos Especiais em Inteligência Artificial II",
        requirements: ["ENG10792"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11268",
        period: null,
        name: "Tópicos Especiais em Interface Humano-Computador II",
        requirements: ["COM10507"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11269",
        period: null,
        name: "Tópicos Especiais em Otimização Combinatória II",
        requirements: ["COM10131"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11270",
        period: null,
        name: "Tópicos Especiais em Programação II",
        requirements: ["COM10082"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11271",
        period: null,
        name: "Tópicos Especiais em Redes de Computadores II",
        requirements: ["COM10394"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11272",
        period: null,
        name: "Tópicos Especiais em Sistemas Operacionais II",
        requirements: ["COM10132"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11273",
        period: null,
        name: "Tópicos Especiais em Sistemas Web II",
        requirements: ["COM10396"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11065",
        period: null,
        name: "Modelagem e Simulação",
        requirements: ["COM06992", "ENG05510"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11066",
        period: null,
        name: "Montagem e Manutenção de Computadores",
        requirements: ["COM10076"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11067",
        period: null,
        name: "Multimídia e Hipermídia",
        requirements: ["COM10078", "COM10507"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11068",
        period: null,
        name: "Neurocomputação",
        requirements: ["ENG10792"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11069",
        period: null,
        name: "Otimização Linear Inteira",
        requirements: ["COM10131"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11071",
        period: null,
        name: "Processamento de Alto Desempenho",
        requirements: ["COM10616"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11072",
        period: null,
        name: "Processos Estocásticos",
        requirements: ["COM06992"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11073",
        period: null,
        name: "Programação IV",
        requirements: ["COM06853"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11074",
        period: null,
        name: "Segurança em Redes",
        requirements: ["COM10394"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11078",
        period: null,
        name: "Tópicos Especiais em Computação Gráfica I",
        requirements: ["COM10604"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11082",
        period: null,
        name: "Tópicos Especiais em Inteligência Artificial I",
        requirements: ["ENG10792"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11084",
        period: null,
        name: "Tópicos Especiais em Interface Humano-Computador I",
        requirements: ["COM10507"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11089",
        period: null,
        name: "Tópicos Especiais em Sistemas Operacionais I",
        requirements: ["COM10132"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    },
    {
        code: "COM11091",
        period: null,
        name: "Tópicos Especiais em Sistemas Web I",
        requirements: ["COM10396"],
        type: SubjectType.OPTIONAL,
        state: SubjectState.UNAVAILABLE
    }
];

export const updateSubjectsState = () => {
    for (const subject of subjects) {
        if ([SubjectState.DONE, SubjectState.ONGOING].includes(subject.state)) {
            continue;
        }

        const requirements = subjects.filter(x => subject.requirements.includes(x.code));

        if (requirements.some(x => x.state !== SubjectState.DONE)) {
            subject.state = SubjectState.UNAVAILABLE;
            continue;
        }

        subject.state = SubjectState.AVAILABLE;
    }
}

updateSubjectsState();

export default subjects;
