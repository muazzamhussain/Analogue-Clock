function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate degrees for each hand
    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minuteDeg = (minutes * 6);
    const secondDeg = (seconds * 6);
    
    // Apply rotation to the hands
    document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the correct time on load