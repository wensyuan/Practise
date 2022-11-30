const url = 'https://hexschool.github.io/js-filter-data/data.json';

const getData = () => {
    axios.get(url)
      .then(function (res) {
        data = res.data;
      })
      .catch(function (error) {
        console.log(error);
      })
    }
getData();