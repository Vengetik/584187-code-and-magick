'use strict';
var CLOUD_X = 150;
var CLOUD_Y = 60;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 190;
var GAP = 40;
var BAR_X = 200; // отступ по X
var BAR_WIDTH = 40; // ширина столбца
var barHeight = CLOUD_HEIGHT - GAP; // максимальная высота стобца
var TEXT_GAP = 20; // Текстовый отступ

// CLOUD
var renderCloud = function (ctx) {
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.beginPath();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetY = 10;
  ctx.shadowOffsetX = 10;
  ctx.fillStyle = 'white';
  ctx.bezierCurveTo(540, 270, 350, 220, 160, 270);
  ctx.lineTo(161, 290);
  ctx.bezierCurveTo(160, 290, 140, 300, 120, 290);
  ctx.bezierCurveTo(120, 290, 150, 140, 120, 20);
  ctx.bezierCurveTo(120, 10, 140, 0, 160, 10);
  ctx.lineTo(161, 40);
  ctx.bezierCurveTo(160, 40, 350, 80, 540, 43);
  ctx.lineTo(539, 20);
  ctx.bezierCurveTo(540, 20, 560, 10, 580, 20);
  ctx.bezierCurveTo(580, 30, 550, 180, 580, 275);
  ctx.bezierCurveTo(580, 280, 560, 300, 540, 285);
  ctx.lineTo(538, 240);
  ctx.fill();
  ctx.closePath();
  // clear shadow
  ctx.shadowOffsetY = 0;
  ctx.shadowOffsetX = 0;
  // Victory message
  ctx.fillStyle = '#fff';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 260, 30);
  ctx.fillText('Список результатов:', 260, 50);
};
// get random number between min and max
var getRandom = function getRandom(min, max) {
  return Math.random() * (max - min) + min;
};
var renderColumn = function (ctx, player, time, x, height) {
  ctx.fillStyle = player === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 9, 255, ' + getRandom(0.1, 1) + ')';
  ctx.fillRect(x, CLOUD_Y + 10 + (barHeight - height), BAR_WIDTH, height);
  renderText(ctx, player, time, x, height);
};

var renderText = function (ctx, player, time, x, height) {
  ctx.fillText(player, x, CLOUD_Y + 10 + barHeight + TEXT_GAP);
  ctx.fillText(Math.ceil(time), x, CLOUD_Y + 10 + (barHeight - height));
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx);
  var maxHeight = Math.max.apply(null, times);

  // get maximum height column
  for (var i = 0; i < players.length; i++) {
    var currentHeight = barHeight * times[i] / maxHeight;
    var x = BAR_X + (BAR_WIDTH + GAP) * i;
    renderColumn(ctx, players[i], times[i], x, currentHeight);
  }

};

