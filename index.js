document.addEventListener("DOMContentLoaded", function() {
    // Lógica para adicionar um evento de clique ao botão "Enter Your Message"
    const sendMessageButton = document.querySelector('.SendMessageForMe button');
    sendMessageButton.addEventListener('click', function() {
        const messageTextarea = document.querySelector('.SendMessageForMe textarea');
        const message = messageTextarea.value;
        // Aqui você pode adicionar a lógica para enviar a mensagem
        console.log('Mensagem enviada:', message);
        // Limpar o campo de mensagem após o envio
        messageTextarea.value = '';
    });

    // Lógica para adicionar um evento de mudança ao select de preferências de trabalho
    const selectElement = document.querySelector('.My-Preferences-The-Job select');
    selectElement.addEventListener('change', function() {
        const selectedOption = selectElement.options[selectElement.selectedIndex].text;
        // Aqui você pode adicionar a lógica para lidar com a opção selecionada
        console.log('Opção selecionada:', selectedOption);
    });

    // Lógica para adicionar um evento de clique aos links de redes sociais
    const socialLinks = document.querySelectorAll('.Links a');
    socialLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            // Aqui você pode adicionar a lógica para redirecionar para o link correto
            console.log('Navegando para:', href);
        });
    });
});