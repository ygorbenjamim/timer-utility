export const timer = (minutes) => {
  var seconds = minutes * 60;

  const resume = () => {
    // Condição de fim do timer
    if (seconds == 0) {
      clearInterval(timerId);
      return;
    }

    const timerId = setTimeout(() => {
      seconds--;

      // Atualização do valor visualmente
      console.log(`
        ${Math.floor(seconds / 60)
          .toString()
          .padStart(2, "0")}
        :
        ${Math.floor(seconds % 60)
          .toString()
          .padStart(2, "0")}
      `);

      resume();
    }, 1000);
  };

  resume();
};
