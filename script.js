document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    const toggleMusicBtn = document.getElementById('toggle-music');
    const workoutDays = document.getElementById('workout-days');

    // Iniciar a música
    music.play();

    // Gerenciar o botão de música
    toggleMusicBtn.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            this.textContent = 'Pausar Música';
        } else {
            music.pause();
            this.textContent = 'Tocar Música';
        }
    });

    // Plano de treino semanal
    const workoutPlan = [
        {
            day: 'Segunda-feira',
            exercises: [
                '40 Flexões de Braço (Aquecimento)',
                '3X15 Supino com halter',
                '3x15 Supino inclinado com Barra',
                '3x15 Crucifixo na polia',
                '3x15 Elevação lateral c/ elevação frontal',
                '3x15 Encolhimento de ombros com barra atrás',
                '3x15 Desenvolvimento unilateral com halter',
                '3x20 Tríceps testa W/ banco inclinado',
                '3xAté a Falha Tríceps com corda/polia baixa '
            ]
        },
        {
            day: 'Terça-feira',
            exercises: [
                '2x30 Afundo alternado (aquecimento)',
                '3X15 Agachamento no smith',
                '3x15 Cadeira extensora',
                '3x15 Leg 45',
                '6x30 panturrilha no landmine',
                '5x20 Cadeira adutora - segurando 3s no fechamento',
                '5x60s Remador com carga a frente'
            ]
        },
        {
            day: 'Quarta-feira',
            exercises: [
                '2x20 Barra fixa peg/aberta (aquecimento)',
                '3x15 Crucifixo inverso com halteres',
                '3x15 Remada baixa pegador em V',
                '3x15 Remada com corda/polia baixa',
                '3x15 Remada cavalinho',
                '5x20 Rosca martelo alternada',
                '5x15 Rosca martelo com barra W',
                '3x30 Rotação interna e externa com halter/braço estedido'
            ]
        },
        {
            day: 'Quinta-feira',
            exercises: [
                '40 Flexões de Braço (Aquecimento)',
                '3X15 Supino com halter',
                '3x15 Supino inclinado com Barra',
                '3x15 Crucifixo na polia',
                '3x15 Elevação lateral c/ elevação frontal',
                '3x15 Encolhimento de ombros com barra atrás',
                '3x15 Desenvolvimento unilateral com halter',
                '3x20 Tríceps testa W/ banco inclinado',
                '3xAté a Falha Tríceps com corda/polia baixa '
            ]
        },
        {
            day: 'Sexta-feira',
            exercises: [
                '2x45s Levantamento sumô coom halter (aquecimento)',
                '3x15 Mesa flexora',
                '3x15 Stiff com barra',
                '3x15 Levantamento sumô com barra',
                '3x25 Cadeira abdutora',
                '5x60s Remador com carga no peito'
            ]
        },
        {
            day: 'Sábado',
            exercises: [
                '2x20 Barra fixa peg/aberta (aquecimento)',
                '3x15 Crucifixo inverso com halteres',
                '3x15 Remada baixa pegador em V',
                '3x15 Remada com corda/polia baixa',
                '3x15 Remada cavalinho',
                '5x20 Rosca martelo alternada',
                '5x15 Rosca martelo com barra W',
                '3x30 Rotação interna e externa com halter/braço estedido'
            ]
        },
        {
            day: 'Domingo',
            exercises: [
                'Descanso Ativo: Pescar um peixe gigante para o almoço',
                'Meditação para controle do Ki'
            ]
        }
    ];

    // Criar o plano de treino na página
    workoutPlan.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'workout-day';
        dayElement.innerHTML = `
            <h3>${day.day}</h3>
            <ul>
                ${day.exercises.map(exercise => `<li>${exercise}</li>`).join('')}
            </ul>
        `;
        workoutDays.appendChild(dayElement);
    });
});