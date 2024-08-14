document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project-item');

    projects.forEach((project, index) => {
        setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
        }, index * 300);
    });
});
