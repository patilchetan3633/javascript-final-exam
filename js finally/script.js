document.addEventListener('DOMContentLoaded', function() {
    const link = 'https://api.rootnet.in/covid19-in/stats/latest';
    const tableBody = document.getElementById('covidData');

    fetch(link)
        .then(response => response.json())
        .then(data => {
            const allData = data.data.regional;
            allData.forEach((region, index) => {
                const row = document.createElement('tr');
                const totalCases = region.confirmedCasesIndian + region.confirmedCasesForeign;
                
                row.innerHTML = `
                    <td>${index+1}</td>
                    <td>${region.loc}</td>
                    <td>${region.confirmedCasesIndian}</td>
                    <td>${region.confirmedCasesForeign}</td>
                    <td>${region.discharged}</td>
                    <td>${region.deaths}</td>
                    <td>${totalCases}</td>
                `;
                
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            tableBody.innerHTML = '<tr><td colspan="7" class="text-center">Error loading data. Please try again later.</td></tr>';
        });
});