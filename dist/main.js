(()=>{"use strict";var i=function(i){var t=this;this.fill=function(i,n,e){n||(n=i),e||(e=i),t.cg.fillStyle="rgb("+i+","+n+","+e+")"},this.background=function(i,n,e){var h=t.cg.fillStyle;t.fill(i,n,e),t.cg.fillRect(0,0,t.width,t.height),t.cg.fillStyle=h},this.rect=function(i,n,e,h){t.cg.fillRect(i,n,e,h)},this.pixel=function(i,n,e){void 0===e&&(e=t.pixelScale),t.cg.fillRect(i,n,e,e)},this.canvas=document.getElementById(i),this.cg=this.canvas.getContext("2d"),this.width=window.innerWidth<window.innerHeight?window.innerWidth:window.innerHeight,this.height=window.innerWidth<window.innerHeight?window.innerWidth:window.innerHeight,this.canvas.width=this.width,this.canvas.height=this.height,this.pixelScale=1};window.onload=function(){new i("c");var t,n=function(){t=Date.now(),t,window.requestAnimationFrame(n)};Date.now(),window.requestAnimationFrame(n)}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nZWxpbmcvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3BpbmdlbGluZy8uL3NyYy9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vcGluZ2VsaW5nLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImNhbnZhc0lkIiwiZmlsbCIsInIiLCJnIiwiYiIsImNnIiwiZmlsbFN0eWxlIiwiYmFja2dyb3VuZCIsImJmaWxsIiwiZmlsbFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInJlY3QiLCJ4IiwieSIsInBpeGVsIiwic2NhbGUiLCJwaXhlbFNjYWxlIiwidGhpcyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwib25sb2FkIiwiQ2FudmFzIiwidGltZU5vdyIsImN5Y2xlIiwiRGF0ZSIsIm5vdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Im1CQVlPLElDVlAsRUFVSSxTQUFZQSxHQUFaLFdBV0EsS0FBQUMsS0FBTyxTQUFDQyxFQUFXQyxFQUFZQyxHQUN2QkQsSUFBR0EsRUFBSUQsR0FDUEUsSUFBR0EsRUFBSUYsR0FDWCxFQUFLRyxHQUFHQyxVQUFZLE9BQU9KLEVBQUMsSUFBSUMsRUFBQyxJQUFJQyxFQUFDLEtBSTFDLEtBQUFHLFdBQWEsU0FBQ0wsRUFBV0MsRUFBWUMsR0FDakMsSUFBTUksRUFBUSxFQUFLSCxHQUFHQyxVQUN0QixFQUFLTCxLQUFLQyxFQUFHQyxFQUFHQyxHQUNoQixFQUFLQyxHQUFHSSxTQUFTLEVBQUcsRUFBRyxFQUFLQyxNQUFPLEVBQUtDLFFBQ3hDLEVBQUtOLEdBQUdDLFVBQVlFLEdBR3hCLEtBQUFJLEtBQU8sU0FBQ0MsRUFBV0MsRUFBV0osRUFBZUMsR0FDekMsRUFBS04sR0FBR0ksU0FBU0ksRUFBR0MsRUFBR0osRUFBT0MsSUFHbEMsS0FBQUksTUFBUSxTQUFDRixFQUFXQyxFQUFXRSxRQUFBLElBQUFBLE1BQWdCLEVBQUtDLFlBQ2hELEVBQUtaLEdBQUdJLFNBQVNJLEVBQUdDLEVBQUdFLEVBQU9BLElBN0I5QkUsS0FBS0MsT0FBNkJDLFNBQVNDLGVBQWVyQixHQUMxRGtCLEtBQUtiLEdBQWdDYSxLQUFLQyxPQUFPRyxXQUFXLE1BQzVESixLQUFLUixNQUFRYSxPQUFPQyxXQUFhRCxPQUFPRSxZQUFjRixPQUFPQyxXQUFhRCxPQUFPRSxZQUNqRlAsS0FBS1AsT0FBU1ksT0FBT0MsV0FBYUQsT0FBT0UsWUFBY0YsT0FBT0MsV0FBYUQsT0FBT0UsWUFDbEZQLEtBQUtDLE9BQU9ULE1BQVFRLEtBQUtSLE1BQ3pCUSxLQUFLQyxPQUFPUixPQUFTTyxLQUFLUCxPQUMxQk8sS0FBS0QsV0FBYSxHQ2QxQk0sT0FBT0csT0FBUyxXQUVELElBQUlDLEVBQU8sS0FBdEIsSUFFSUMsRUFHRUMsRUFBUSxXQUNWRCxFQUFVRSxLQUFLQyxNQUVGSCxFQUViTCxPQUFPUyxzQkFBc0JILElBRXBCQyxLQUFLQyxNQUVsQlIsT0FBT1Msc0JBQXNCSCxLIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aW1lcnMgfSBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7IENhbnZhcyB9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5pbXBvcnQgeyBmaXJlc3RyZWcgfSBmcm9tIFwiLi9maXJlc3RyZWdcIjtcclxuaW1wb3J0IHsgbWFuZGVsYnJvdCB9IGZyb20gXCIuL21hbmRlbGJyb3RcIjtcclxuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi90aW1lclwiO1xyXG5pbXBvcnQgeyB0cmVrYW50IH0gZnJvbSBcIi4vdHJla2FudFwiO1xyXG5pbXBvcnQgeyByYW5kSW50LCByYW5kb20sIHNsaWRlciwgc2xpZGVyMiB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldHVwID0gKGM6IENhbnZhcykgPT4ge1xyXG4gICAgLy8gcnVucyBvbmNlIGF0IHN0YXJ0XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb29wID0gKGM6IENhbnZhcywgZGVsdGE6IG51bWJlcikgPT4ge1xyXG4gICAgLy8gcnVucyBjb250aW51ZWFsbHkgYWZ0ZXIgc2V0dXBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG4iLCJcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMge1xyXG4gICAgXHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY2c6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIFxyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgXHJcbiAgICBwaXhlbFNjYWxlOiBudW1iZXI7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0lkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpO1xyXG4gICAgICAgIHRoaXMuY2cgPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPiB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA8IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lcldpZHRoIDogd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggPCB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHdpbmRvdy5pbm5lckhlaWdodDs7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMucGl4ZWxTY2FsZSA9IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgZmlsbCA9IChyOiBudW1iZXIsIGc/OiBudW1iZXIsIGI/OiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZighZykgZyA9IHI7XHJcbiAgICAgICAgaWYoIWIpIGIgPSByO1xyXG4gICAgICAgIHRoaXMuY2cuZmlsbFN0eWxlID0gYHJnYigke3J9LCR7Z30sJHtifSlgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGJhY2tncm91bmQgPSAocjogbnVtYmVyLCBnPzogbnVtYmVyLCBiPzogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmZpbGwgPSB0aGlzLmNnLmZpbGxTdHlsZTtcclxuICAgICAgICB0aGlzLmZpbGwociwgZywgYik7XHJcbiAgICAgICAgdGhpcy5jZy5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jZy5maWxsU3R5bGUgPSBiZmlsbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVjdCA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLmNnLmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwaXhlbCA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciA9IHRoaXMucGl4ZWxTY2FsZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2cuZmlsbFJlY3QoeCwgeSwgc2NhbGUsIHNjYWxlKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBsb29wLCBzZXR1cCB9IGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9jYW52YXNcIlxyXG5cclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjID0gIG5ldyBDYW52YXMoJ2MnKTtcclxuICAgIGxldCB0aW1lQmVmb3JlOiBudW1iZXI7XHJcbiAgICBsZXQgdGltZU5vdzogbnVtYmVyO1xyXG4gICAgbGV0IGRlbHRhOiBudW1iZXI7XHJcbiAgICBcclxuICAgIGNvbnN0IGN5Y2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHRpbWVOb3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGRlbHRhID0gdGltZU5vdyAtIHRpbWVCZWZvcmU7XHJcbiAgICAgICAgdGltZUJlZm9yZSA9IHRpbWVOb3c7XHJcbiAgICAgICAgbG9vcChjLCBkZWx0YSk7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjeWNsZSlcclxuICAgIH1cclxuICAgIHRpbWVCZWZvcmUgPSBEYXRlLm5vdygpO1xyXG4gICAgc2V0dXAoYyk7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGN5Y2xlKTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==