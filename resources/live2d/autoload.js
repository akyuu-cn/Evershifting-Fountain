// live2d_path 参数建议使用绝对路径
const live2d_path = "/resources/live2d/";
//const live2d_path = "/live2d-widget/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() => {
		// 配置选项的具体用法见 README.md
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			//apiPath: "https://live2d.fghrsh.net/api/",
			cdnPath: "/resources/live2d/",
			tools: ["hitokoto", "asteroids", "switch-model", "switch-texture", "photo", "info", "quit"]
		});
	});
}

console.log(`
live2d-widget loaded!
%c
　　　　　　　　　 　　　_,,..　-─‐- ､.,_
　　　　　　　　　 ,　'"´　　　　 　　　　｀'ｒO ､　　 　　＿＿_(ヽ_＿＿
　　　　　　 　 ／　　　　　　　　　　　 　{､ヽ O　 　 └┐┌─┐┌┘
　　　　　 　 /　 　 .／　 　 ／|　　　　　 |--＼　　　 r┘└─┘└┐（] /7　　（ヽ　　 ＿＿__
　　　　　　 ,'　 　 /　 　 ／-‐'!　 , 　 　 / 　　､＼　 ｀二二l　l二二´ｒ‐‐' ,二l l二二ヽ└─ｧ/[l[l
　　　　　　 |　 　 |　　 ./ｧ‐=,､|／|　 .／ﾊ.　 　 | rヽ └─┐┌─┘￣（（__　　　 　| |　　//_
　　　　　　 | 　 .八　 /ｲ!ﾉ　l| ヽ. |／|､/_.|　　　|/　　　　　.|__」　　　　　 ヽ┘　　　くノ　　ヽ┘
　　　　　　,'　／　（ヽ|'　ゝ‐ﾟ'　　 　 ｧ'!´Y| 　,　,'　　 ＿＿ｒ､＿＿
　　 　 　 / ´　 　 /ヽ　"　　　　 ,　lり ﾉ/.／ /　　 └┐┌┐┌┘
　　 　 ／ 　 　 ／ /人　　　　　　　　ﾞ/イ}／ 　　　l二＿￣＿二l　／> r‐'｀┐ｒ､　/7　ｒ､
　　　/ 　 　 ／ .／_7、＼　　 ｀　 　ノ＿r/|　　　　　 └┐┌┘　く く　 ｀7/_ｒ ヽ) | |_　|_」
　 　 |　　|　, '´￣＼　＼　＞‐ァ7て＿,ノ、|　　　　 　　 └┘　　 　＼>　｀(_ｄ､)　 ヽﾉ
　　　'､ 　∨　 　　　ヽ. 　＼_/ /＼ r'＿ノ},|.　　　　ｒ､　　 ｒ､　　　＿ｒ､＿
　　　　＼|| 　　　　 r |＼ ／∨|　/ﾄ､|　　ｿ　　 く） | | く） | |　ｒ､└,┌┐,┘ /7　ｒ､
　 　 　 　 |　_,,.. -‐ ヽ!　　　　ヽヾヽr-､イ_　　　　ｒ'_／l　 ヽ二ノに__￣_二l .| |_　|_」
　　　　 ｒ::"´::::::::::::::::_」　　　　　／（＼ ,ﾊ::]　　 　 く／ 　 　 |￣|└┐┌「｀! ┌┐
　　　　 l_,,... -‐ ''"´　'､　　 ＿/　　.|　 ヽ||　　　　　　　　　　|　 |　　￣../ └┘└─┐
　　　 　 ｀l　　 　 　 　 ＼/:::::::::｀ヽ人　　|ヽ.　　　　　 　　　/ 　 '、 　 く__/r'コ　l二"´
　　 　 　 .|　　　　　　 ／´￣｀ヽ;:::::＼｀ /:::::|　　　　 　 　, '　,.へ. ＼　　　└┐┌┘
　　 　 　/|　　　　　r/　　　　　　＼:::::Y:::::::∧ 　　　　　く_／　　 ＼__>　l二二...二二l
`,"font-family: MS PGothic");