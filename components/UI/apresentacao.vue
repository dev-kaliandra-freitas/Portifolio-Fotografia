<template>
   <div class="text-container">
                    <h2 class="text-justify">
                        Olá! Meu nome é Kaliandra de Freitas, e sou apaixonada pela vida através da lente da minha
                        câmera. Para mim, a fotografia é uma forma de eternizar momentos que, mesmo que se desvanecem em
                        nossas memórias, permanecem vivos nas imagens que capturamos. As fotos nunca deixam de
                        transmitir sentimentos profundos e experiências significativas.
                    </h2>
                    <h2 class="mt-5 text-justify">
                        Dentro dessa arte, exploro diversos temas, incluindo retratos, paisagens, fotografia de eventos
                        e ensaios fotográficos. Meu objetivo é eternizar os melhores momentos da vida das pessoas,
                        sempre com uma abordagem detalhista. Procuro enxergar além do que muitos veem, focando nas
                        pequenas coisas que muitas vezes passam despercebidas, mas que são verdadeiramente especiais.
                        Acredito que a beleza reside nos detalhes.
                    </h2>
                    <h2 class="mt-5 text-justify">
                        Viver é uma arte, e as lentes da câmera são apenas ferramentas que utilizo para lembrar e
                        mostrar aos outros o que pode ser perdido se não olharmos com calma. Capturo a natureza, os
                        laços afetivos, as celebrações e cada passo significativo da jornada. Espero tocar os corações
                        através do meu olhar, pois as imagens que crio são uma forma de expressar a beleza e a emoção
                        que vejo ao meu redor. Os sorrisos, a animação e as palavras de agradecimento que recebo são,
                        para mim, a maior recompensa.
                    </h2>
                    <h2 class="mt-5 text-justify">
                        Se você está buscando alguém para eternizar momentos especiais em sua vida, adoraria conversar e
                        criar algo memorável juntos.
                    </h2>
                </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.text-container {
    width: 100%;
    padding-right: 2rem;
}

.mt-5 {
    margin-top: 1.25rem;
}

@media (max-width: 768px) {
    .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .text-justify{
        font-size: small
    }
}
</style>