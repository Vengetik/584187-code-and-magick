'use strict';
var CLOUD_X = 150;
var CLOUD_Y = 60;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 190;
var GAP = 40;

window.renderStatistics = function (ctx, players, times) {
  // bezier and common line
  var line = function (x, y) {
    ctx.lineTo(x, y);
  };
  var bezier = function (cp1x, cp1y, cp2x, cp2y, x, y) {
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  };
  // CLOUD
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.beginPath();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetY = 10;
  ctx.shadowOffsetX = 10;
  ctx.fillStyle = 'white';
  bezier(540, 270, 350, 220, 160, 270);
  line(161, 290);
  bezier(160, 290, 140, 300, 120, 290);
  bezier(120, 290, 150, 140, 120, 20);
  bezier(120, 10, 140, 0, 160, 10);
  line(161, 40);
  bezier(160, 40, 350, 80, 540, 43);
  line(539, 20);
  bezier(540, 20, 560, 10, 580, 20);
  bezier(580, 30, 550, 180, 580, 275);
  bezier(580, 280, 560, 300, 540, 285);
  line(538, 240);
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
  // BAR CHART
  // get maximum height column
  var maxHeight = Math.max.apply(null, times);
  // get random number between min and max
  var getRandom = function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  };
  var BAR_X = 200;
  var BAR_WIDTH = 40;
  var barHeight = CLOUD_HEIGHT - GAP;
  var histogramHeight = 150;
  var TEXT_GAP = 20;
  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 9, 255, ' + getRandom(0.1, 1) + ')';
    }
    ctx.fillText(players[i], BAR_X + (GAP + BAR_WIDTH) * i, CLOUD_Y + 10 + barHeight + TEXT_GAP);
    ctx.fillRect(BAR_X + (BAR_WIDTH + GAP) * i, CLOUD_Y + 10, BAR_WIDTH, (barHeight * times[i]) / maxHeight);
  }
};

