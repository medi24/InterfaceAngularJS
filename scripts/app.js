

function SongCtrl($scope){
	$scope.songs = [
		{
			name : "Muse - Unitended"
		},
		{
			name : "Coldplay - See you soon"
		},
		{
			name : "Prince - Purple rain"
		}
	]
	
	$scope.$watch("songs", function(){
		$scope.count = $scope.songs.length;
	}, true)
	 
	$scope.removeSong = function(index){
		$scope.songs.splice(index,1);
	}
	
	$scope.addSong = function(){
		$scope.songs.push({
			name : $scope.newsong
		});
		$scope.newsong="";
	}
	
}