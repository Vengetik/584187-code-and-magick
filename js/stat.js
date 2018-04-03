'use strict';
var CLOUD_X = 175;
var CLOUD_Y = 70;
var CLOUD_WIDTH = 350;
var CLOUD_HEIGHT = 140;
window.renderStatistics = function (ctx) {
  //  FIELD OF RESULTS
  var line = function (x, y) {
    ctx.lineTo(x, y);
  };
  var bezier = function (cp1x, cp1y, cp2x, cp2y, x, y) {
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  };
  ctx.fillStyle = 'white';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetY = 10;
  ctx.shadowOffsetX = 10;
  ctx.beginPath();
  ctx.fillStyle = 'white';
  bezier(540, 250, 350, 210, 160, 250);
  line(161, 270);
  bezier(160, 280, 140, 290, 120, 280);
  bezier(120, 280, 150, 140, 120, 20);
  bezier(120, 20, 140, 10, 160, 20);
  line(161, 40);
  bezier(160, 50, 350, 90, 540, 53);
  line(539, 30);
  bezier(540, 30, 560, 20, 580, 30);
  bezier(580, 30, 550 ,180, 580, 270);
  bezier(580, 270, 560, 280, 540, 270);
  line(538, 230);
  ctx.fill();
  ctx.closePath();

};

