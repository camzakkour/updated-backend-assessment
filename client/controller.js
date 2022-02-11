document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  
document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};
    
document.getElementById("motivationButton").onclick = function () {
    axios.get("http://localhost:4000/api/motivation/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};

