document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.close-btn');
    const safetyButtons = document.querySelectorAll('.safety-btn');

    const safetyContent = {
        password: {
            title: 'Password Security Tips',
            content: `
                <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80" alt="Password Security" class="modal-image">
                <ul>
                    <li>Use unique passwords for each account</li>
                    <li>Make passwords at least 12 characters long</li>
                    <li>Include numbers, symbols, and mixed-case letters</li>
                    <li>Use a password manager to store passwords securely</li>
                    <li>Enable two-factor authentication when available</li>
                    <li>Regularly update your passwords</li>
                    <li>Never share passwords via email or messages</li>
                    <li>Avoid using personal information in passwords</li>
                </ul>
            `
        },
        privacy: {
            title: 'Online Privacy Guidelines',
            content: `
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" alt="Online Privacy" class="modal-image">
                <ul>
                    <li>Regularly review privacy settings on social media</li>
                    <li>Be careful what personal information you share online</li>
                    <li>Use secure and private browsing modes</li>
                    <li>Be aware of phishing attempts</li>
                    <li>Keep your software and systems updated</li>
                    <li>Use VPN services on public networks</li>
                    <li>Review app permissions regularly</li>
                    <li>Be cautious with third-party applications</li>
                </ul>
            `
        },
        cyber: {
            title: 'Essential Cybersecurity Tips',
            content: `
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Cybersecurity" class="modal-image">
                <ul>
                    <li>Install and maintain antivirus software</li>
                    <li>Back up your important data regularly</li>
                    <li>Be cautious with email attachments</li>
                    <li>Use secure Wi-Fi connections</li>
                    <li>Learn to recognize common cyber threats</li>
                    <li>Keep all devices updated with security patches</li>
                    <li>Use encryption for sensitive data</li>
                    <li>Monitor your accounts for suspicious activity</li>
                </ul>
            `
        },
        malware: {
            title: 'Malware Protection',
            content: `
                <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" alt="Malware Protection" class="modal-image">
                <ul>
                    <li>Keep antivirus software up to date</li>
                    <li>Scan downloads before opening</li>
                    <li>Don't click on suspicious links</li>
                    <li>Use ad-blockers and security extensions</li>
                    <li>Be careful with software downloads</li>
                    <li>Monitor system performance for unusual behavior</li>
                    <li>Regular system scans</li>
                    <li>Keep backups of important files</li>
                </ul>
            `
        }
    };

    function showModal(topic) {
        const content = safetyContent[topic];
        modalTitle.textContent = content.title;
        modalContent.innerHTML = content.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    safetyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const topic = button.getAttribute('data-topic');
            showModal(topic);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});