document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');

    // Get all elements
    const connectWalletBtn = document.getElementById('connectWallet');
    const walletInput = document.getElementById('walletInput');
    const verifyWalletBtn = document.getElementById('verifyWallet');
    const walletAddressInput = document.getElementById('walletAddress');
    const walletConnected = document.getElementById('walletConnected');
    const walletAddressSpan = document.querySelector('.wallet-address');

    // Connect wallet button handler
    if (connectWalletBtn) {
        connectWalletBtn.onclick = function() {
            console.log('Connect button clicked');
            walletInput.style.display = 'block';
            connectWalletBtn.style.display = 'none';
        };
    }

    // Verify wallet button handler
    if (verifyWalletBtn) {
        verifyWalletBtn.onclick = function() {
            console.log('Verify button clicked');
            const address = walletAddressInput.value.trim();
            
            if (address) {
                console.log('Address entered:', address);
                // Show connected state
                walletConnected.style.display = 'block';
                walletAddressSpan.textContent = address;
                walletInput.style.display = 'none';
                
                // Update balance displays
                document.getElementById('preConnectBalances').style.display = 'none';
                document.getElementById('postConnectBalances').style.display = 'block';
                
                // Store the wallet address
                localStorage.setItem('walletAddress', address);
                
                // Show success message
                alert('Wallet verified successfully!');
            } else {
                alert('Please enter a valid wallet address');
            }
        };
    } else {
        console.error('Verify button not found!');
    }

    // Check for previously connected wallet
    const savedAddress = localStorage.getItem('walletAddress');
    if (savedAddress) {
        walletConnected.style.display = 'block';
        walletAddressSpan.textContent = savedAddress;
        connectWalletBtn.style.display = 'none';
        walletInput.style.display = 'none';
        
        // Update balance displays
        document.getElementById('preConnectBalances').style.display = 'none';
        document.getElementById('postConnectBalances').style.display = 'block';
    }

    // Game section handling
    const gamesOption = document.getElementById('gamesOption');
    const gameSection = document.getElementById('gameSection');

    gamesOption.addEventListener('click', () => {
        // Toggle game section visibility
        gameSection.style.display = gameSection.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('disconnectWallet').addEventListener('click', () => {
        // Clear the stored wallet address
        localStorage.removeItem('walletAddress');
        
        // Reset UI state
        document.getElementById('walletConnected').style.display = 'none';
        document.getElementById('connectWallet').style.display = 'block';
        document.getElementById('walletInput').style.display = 'none';
        
        // Reset balance displays
        document.getElementById('preConnectBalances').style.display = 'block';
        document.getElementById('postConnectBalances').style.display = 'none';
        
        // Clear the wallet address display
        document.querySelector('.wallet-address').textContent = '';
    });

    document.getElementById('withdrawTon').addEventListener('click', () => {
        alert('Withdraw TON functionality not implemented yet.');
    });

    document.getElementById('convertGalaxy').addEventListener('click', () => {
        alert('Convert TON Galaxy functionality not implemented yet.');
    });
});

// Function to launch the game
function launchGame() {
    window.location.href = 'games/pull_up_game/index.html';
} 