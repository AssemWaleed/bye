// Target date: Wednesday, January 21, 2026
const targetDate = new Date('2026-01-16T00:00:00');
// Start date for calculating progress (current time)
const startDate = new Date();

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    
    // Calculate total duration and elapsed time for color transition
    const totalDuration = targetDate - startDate;
    const elapsed = now - startDate;
    const progress = Math.max(0, Math.min(1, elapsed / totalDuration)); // 0 to 1
    
    // Calculate color values (white to black)
    const grayValue = Math.floor(255 * (1 - progress));
    const bgColor = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
    
    // Apply background color
    document.body.style.backgroundColor = bgColor;
    
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const messageElement = document.getElementById('message');
    
    if (diff <= 0) {
        // Countdown finished
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        
        hoursElement.classList.add('zero');
        minutesElement.classList.add('zero');
        secondsElement.classList.add('zero');
        
        messageElement.textContent = 'GOODBYE DAY HAS ARRIVED!';
        messageElement.style.color = '#ff4444';
        messageElement.style.animation = 'pulse 1s infinite';
        
        return;
    }
    
    // Calculate time units
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Update display with leading zeros
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
    
    // Update text color based on progress (white to black)
    const textColorValue = Math.floor(255 * (1 - progress));
    const textColor = `rgb(${textColorValue}, ${textColorValue}, ${textColorValue})`;
    
    // Set text color directly for better visibility
    hoursElement.style.color = textColor;
    minutesElement.style.color = textColor;
    secondsElement.style.color = textColor;
    
    // Remove background gradient to ensure text visibility
    hoursElement.style.background = 'none';
    minutesElement.style.background = 'none';
    secondsElement.style.background = 'none';
    hoursElement.style.webkitBackgroundClip = 'unset';
    minutesElement.style.webkitBackgroundClip = 'unset';
    secondsElement.style.webkitBackgroundClip = 'unset';
    hoursElement.style.webkitTextFillColor = 'unset';
    minutesElement.style.webkitTextFillColor = 'unset';
    secondsElement.style.webkitTextFillColor = 'unset';
    
    // Remove zero class if it was added before
    hoursElement.classList.remove('zero');
    minutesElement.classList.remove('zero');
    secondsElement.classList.remove('zero');
    
    messageElement.textContent = '';
    messageElement.style.animation = '';
}

// Update immediately and then every second
updateCountdown();

setInterval(updateCountdown, 1000);
