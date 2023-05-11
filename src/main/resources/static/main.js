function addMarkersFromCSV(map, csvFile) {
    // Загрузка CSV-файла
    Papa.parse(csvFile, {
        header: true, // Первая строка в CSV-файле содержит заголовки столбцов
        download: true, // Загрузить файл с сервера
        skipEmptyLines: true, // Пропускать пустые строки в CSV-файле
        complete: function(results) {
            // Обработка результатов загрузки CSV-файла
            var markers = []; // Массив для хранения меток
            results.data.forEach(function(row) {
                // Создание метки на основе данных из CSV-файла
                var marker = new ymaps.Placemark(
                    [row.lat, row.lon], // Координаты метки
                    {
                        hintContent: row.name, // Текст подсказки
                        balloonContent: row.description // Текст в балуне
                    }
                );
                markers.push(marker);
            });
            // Добавление меток на карту
            map.geoObjects.add(markers);
        }
    });
}
