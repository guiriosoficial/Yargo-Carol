// =============================================================================
// CONFIGURAÇÕES CENTRALIZADAS DO TEMPLATE YARGO & CAROL
// =============================================================================
// Todas as configurações principais estão centralizadas neste arquivo.
// Para personalizar o comportamento do site, altere apenas os valores abaixo.
// =============================================================================

window.SiteConfig = {
    // EFEITOS VISUAIS
    // =============================================================================
    effects: {
        // Configurações do Parallax
        parallax: {
            enabled: true,              // true para habilitar, false para desabilitar
            speed: 100                  // Velocidade do efeito (0-200, padrão: 100)
        },

        // Configurações do Fly-in (animação de entrada)
        flyIn: {
            enabled: true,              // true para habilitar, false para desabilitar
            timing: 1.6,                // Posição de início da animação (padrão: 1.6)
            speed: 2500                 // Velocidade da animação em milissegundos (padrão: 2500)
        },

        // Configurações de transições
        transitions: {
            enabled: true               // true para habilitar, false para desabilitar
        }
    },

    // NAVEGAÇÃO E SCROLL
    // =============================================================================
    scroll: {
    smoothEnabled: true,                // true para scroll suave, false para padrão do browser
        speed: 1000                     // Velocidade do scroll suave em milissegundos (padrão: 1000)
    },

    // FORMULÁRIO E VALIDAÇÃO
    // =============================================================================
    form: {
        // Configurações de validação
        validation: {
            enabled: true,              // true para habilitar validação customizada, false para desabilitar
            htmlValidation: false       // true para usar validação nativa do HTML5
        },

        // Configurações de máscara
        masks: {
            name: {
                enabled: true,          // true para habilitar máscara de nome, false para desabilitar
                capitalize: true        // true para capitalizar automaticamente
            },
            phone: {
                enabled: true,          // true para habilitar máscara de telefone, false para desabilitar
                patterns: [
                    '(00) 00000-0000',  // Máscara para celular (11 dígitos)
                    '(00) 0000-00009'   // Máscara para telefone fixo (10 dígitos)
                ]
            }
        },

        // Expressões regulares para validação
        validators: {
            name: /[A-z]{2,120}/,
            email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            phone: /^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?([9,8,7]|[9,8,7][ .-])?[2-9]\d{3}[ .-]?\d{4}$/
        }
    },

    // MODAIS
    // =============================================================================
    modals: {
        gifts: {
            enabled: true               // true para habilitar modal de presentes, false para redirecionar direto
        },
        confirmation: {
            enabled: true               // true para habilitar modal de confirmação, false para desabilitar
        },
        closeEnabled: true              // true para permitir fechar modais clicando fora, false para desabilitar
    },

    // CONTEÚDO PERSONALIZADO
    // =============================================================================
    content: {
        // Links externos
        giftsListUrl: '#',              // URL para lista de presentes (usado quando modal está desabilitado)

        // Configurações de form action (para integração com serviços externos)
        formAction: '',                 // URL de destino do formulário (deixe vazio para usar Netlify)
        useNetlify: true                // true para usar Netlify Forms, false para action customizada
    }
};
