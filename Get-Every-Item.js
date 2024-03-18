(function (_0x4d027d, _0x227e9f) {
  var _0x5d8286 = _0x4d027d();
  while (true) {
    try {
      var _0x2f4d59 = parseInt(_0xc5c0(500, 0x433)) / 1 + -parseInt(_0xc5c0(427, 0x4c5)) / 2 * (parseInt(_0xc5c0(529, 0x50)) / 3) + -parseInt(_0xc5c0(550, 0x4d9)) / 4 * (parseInt(_0xc5c0(598, 0x57a)) / 5) + parseInt(_0xc5c0(432, 0x554)) / 6 + -parseInt(_0xc5c0(440, 0x4b6)) / 7 + parseInt(_0xc5c0(493, 0x3c)) / 8 * (parseInt(_0xc5c0(338, 0x3b2)) / 9) + parseInt(_0xc5c0(502, 0xe)) / 10;
      if (_0x2f4d59 === _0x227e9f) {
        break;
      } else {
        _0x5d8286.push(_0x5d8286.shift());
      }
    } catch (_0x231316) {
      _0x5d8286.push(_0x5d8286.shift());
    }
  }
})(_0x158b, 474783);
function _0xaca730(_0x81b904, _0x49c890, _0x196b2f, _0x4cec96, _0xfcd98) {
  return _0xc5c0(_0x196b2f - 0x254, _0x49c890);
}
function unlockWeapons(_0x3cdd19 = 99, _0x3233ac = 9999) {
  var _0x38dc9c = function () {
    var _0x5e42e3 = true;
    return function (_0x9bb987, _0x46d44a) {
      var _0x453133 = _0x5e42e3 ? function () {
        if (_0x46d44a) {
          var _0xb582a9 = _0x46d44a.apply(_0x9bb987, arguments);
          _0x46d44a = null;
          return _0xb582a9;
        }
      } : function () {};
      _0x5e42e3 = false;
      return _0x453133;
    };
  }();
  var _0x2dbfcd = function () {
    var _0xc4ed62 = true;
    return function (_0x470c2d, _0x293218) {
      var _0x1903f5 = _0xc4ed62 ? function () {
        if (_0x293218) {
          var _0x4f9c63 = _0x293218.apply(_0x470c2d, arguments);
          _0x293218 = null;
          return _0x4f9c63;
        }
      } : function () {};
      _0xc4ed62 = false;
      return _0x1903f5;
    };
  }();
  function _0x1d8024(_0x3285ec, _0x223d0a = false) {
    var _0x24da1c = _0x38dc9c(this, function () {
      return _0x24da1c.toString().search("(((.+)+)+)+$").toString().constructor(_0x24da1c).search("(((.+)+)+)+$");
    });
    _0x24da1c();
    var _0x33668c = _0x2dbfcd(this, function () {
      var _0x17eeec = function () {
        var _0xfa2fed;
        try {
          _0xfa2fed = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (_0x3ebba3) {
          _0xfa2fed = window;
        }
        return _0xfa2fed;
      };
      var _0x1b23ce = _0x17eeec();
      var _0x312f13 = _0x1b23ce.console = _0x1b23ce.console || {};
      var _0x129449 = ["log", "warn", "info", "error", "exception", "table", "trace"];
      for (var _0x560a5c = 0; _0x560a5c < _0x129449.length; _0x560a5c++) {
        var _0x431aa3 = 0;
        var _0x5db8bb = _0x2dbfcd.constructor.prototype.bind(_0x2dbfcd);
        var _0x17faee = _0x129449[_0x560a5c];
        var _0x4373f1 = _0x312f13[_0x17faee] || _0x5db8bb;
        _0x5db8bb.__proto__ = _0x2dbfcd.bind(_0x2dbfcd);
        _0x5db8bb.toString = _0x4373f1.toString.bind(_0x4373f1);
        _0x312f13[_0x17faee] = _0x5db8bb;
      }
    });
    _0x33668c();
    e = [];
    if (_0x223d0a) {
      the_cur = _0x3233ac;
    } else {
      the_cur = _0x3cdd19;
    }
    _0x3285ec.forEach(_0x476dd5 => {
      e.push("{\"N\":\"" + the_cur + "\",\"ID\":" + _0x476dd5.ID + '}');
    });
    return '[' + e.join(',') + ']';
  }
  var _0x2c810e = Boot.prototype.game._state._states.get("Boot")._gameData;
  var _0x20c922 = Boot.prototype.game._state._current.user.source.backpack;
  all_weps = _0x1d8024(_0x2c810e.weapon);
  all_outfits = _0x1d8024(_0x2c810e.outfit);
  all_hats = _0x1d8024(_0x2c810e.hat);
  all_relic = _0x1d8024(_0x2c810e.relic);
  all_fossil = _0x1d8024(_0x2c810e.fossil);
  all_items = _0x1d8024(_0x2c810e.item);
  all_boots = _0x1d8024(_0x2c810e.boots);
  all_spell_relics = _0x1d8024(_0x2c810e.spellRelic);
  all_currency = _0x1d8024(_0x2c810e.currency, true);
  all_follow = _0x1d8024(_0x2c810e.follow);
  all_mount = _0x1d8024(_0x2c810e.mount);
  all_mathInt = _0x1d8024(_0x2c810e.mathTownInterior);
  all_mathTownFrame = _0x1d8024(_0x2c810e.mathTownFrame);
  all_key = _0x1d8024(_0x2c810e.key);
  all_emotes = _0x1d8024(_0x2c810e.emote);
  Boot.prototype.game._state._current.user.source.house.data.items = {};
  var _0x290840 = {
    A: [],
    N: _0x3cdd19
  };
  Boot.prototype.game._state._states.get("Boot")._gameData.dorm.forEach(_0x403205 => Boot.prototype.game._state._current.user.source.house.data.items[_0x403205.ID] = _0x290840);
  _0x20c922.data.weapon = JSON.parse(all_weps);
  _0x20c922.data.item = JSON.parse(all_items);
  _0x20c922.data.outfit = JSON.parse(all_outfits);
  _0x20c922.data.relic = JSON.parse(all_relic);
  _0x20c922.data.boots = JSON.parse(all_boots);
  _0x20c922.data.hat = JSON.parse(all_hats);
  _0x20c922.data.currency = JSON.parse(all_currency);
  _0x20c922.data.fossil = JSON.parse(all_fossil);
  _0x20c922.data.follow = JSON.parse(all_follow);
  _0x20c922.data.mount = JSON.parse(all_mount);
  _0x20c922.data.key = JSON.parse(all_key);
  _0x20c922.data.spellRelic = JSON.parse(all_spell_relics);
}
function _0x330fd2(_0x4fb737, _0x1d7a9e, _0x41b4ae, _0x429f5e, _0x4518b2) {
  return _0xc5c0(_0x4518b2 - 0x1ca, _0x4fb737);
}
function _0x4e3b44(_0xcb6429, _0x3eae33, _0x15016e, _0x57aa3c, _0x57fa04) {
  return _0xc5c0(_0xcb6429 + 0x229, _0x57fa04);
}
message1 = parseInt(prompt("Made by rxzyx (rzx). How many much of every weapon do you want?"));
function _0x26c8b8(_0x5a9109, _0xd4de59, _0xe5e7b4, _0x46977c, _0x5a2df7) {
  return _0xc5c0(_0x5a2df7 - 0x25c, _0xe5e7b4);
}
function _0x158b() {
  var _0x13e5e9 = ['tion', 'MUWvp', "{\"N\":", 'PtuDp', 'iHpIu', 'zFOIA', 'Boot', 'JVyId', 'GHsNU', 'habcQ', 'Zumfl', 'bind', 'jziti', 'pYQfc', 'split', 'DwqAf', 'yRxQy', 'MCmUT', 'qjArs', '(rzx)', 'Msjqo', 'OUXME', 'RJDbd', 'KDynY', 'rzx).', 'HTrTs', 'fyLXO', 'DtudK', 'sJHFp', 'HUrPX', 'wwOOO', 'LxuPV', 'PNrav', 'KVahG', 'ownFr', 'hBkPM', "n (fu", "is\")(", 'toStr', 'tKDNS', '742285DwDAfE', 'QkmVc', 'HWuJq', 'excep', 'mrlAS', 'tCwqV', 'rmexh', 'error', 'Unexp', 'hKYbJ', 'hduhZ', 'CZeDG', 'PYOWp', 'tTCUx', 'lkfqc', 'OVdah', 'VMofD', 'items', 'push', 'LqiMi', 'skHcG', 'LGmke', 'relic', 'UyHjq', "ery w", 'Data', 'YiPBE', 'bUaPo', 'nctio', 'zAyog', 'log', 'nt?', 'sFgZz', 'VxcoC', 'follo', 'TiBBz', 'GDLin', '6259419egNmci', 'const', 'aTycw', 'rdtsD', "ery c", 'emote', "cy do", 'searc', 'ownIn', 'aFlRH', 'wpJnK', 'YLFXH', 'lPiuX', 'ent', 'VssxE', 'JQAeA', 'YnJOI', 'spell', 'GtsFk', "of ev", 'nstru', 'fEtIZ', 'urren', 'eapon', 'dtwvg', 'ODxyi', "many ", 'get', 'ILxNQ', 'NClbw', 'hWDYy', 'trace', 'kQRZO', 'join', 'item', 'KZBld', " How ", "Made ", 'DkaTO', 'tUjdb', 'QHffY', 'hJDNx', 'JtKdI', 'dGxUt', 'lengt', 'ivAaL', ')+)+)', 'nkclm', 'fossi', 'avSAu', 'QTIpn', 'house', 'nrZsL', 'curre', 'KWTiP', 'hat', 'yHbSh', 'WwFld', 'Zyfnp', "ou wa", 'irpkG', '0|1|2', 'wLqhs', 'jplSx', 'sLNxl', 'OMvza', 'QWZsf', 'jwNUI', 'abNmO', 'VnvRH', 'warn', 'IrSHG', 'wajSP', 'CNpCj', 'backp', 'BMGGp', 'TUYiQ', 'nXMZS', "rn th", 'yMIus', 'nGNel', 'nnuJB', 'ected', 'Relic', 'bEGld', 'pbvEz', 'FqUQc', 'WdTNZ', " by r", '3000KpeZbH', 'user', 'eIynU', 'hRjUK', "\",\"ID", '1755438zOOXcs', 'saKgf', 'AWoww', 'EpKri', 'YwXzr', 'to__', 'terio', "zyx (", '3370794kdaguR', 'jPkdh', 'FpnNT', " Answ", 'ErpSU', 'rUVPl', 'eBLOM', 'iWqwV', 'parse', 'POuoK', 'NhGee', 'mathT', 'RumzZ', 'iUuKe', 'want?', " you ", 'EMeKR', "xzyx ", '_stat', '2|0|5', 'ZkPEK', 'rlOnf', 'ZuGVk', "by rx", "much ", 'ciEme', 'JTkQP', 'wdvry', 'tiNlu', 'PRSet', '{}.co', 'RzvNG', 'kahNW', 'CPzsI', '(((.+', 'type', 'kbtuA', 'data', 'JJaFD', 'ptORt', 'outfi', "\"retu", 'FbPgy', 'table', 'RAInn', 'OlDvs', 'iIzBu', 'proto', '|4|3|', 'ructo', 'sourc', 'otumo', 'HgcPu', '8fzvhib', " do y", 'cmFNB', 'nQMKl', 'zbSjS', 'zYSnW', 'boots', '72965FvbfZO', 'weapo', '13875810ytefpj', 'nUMXC', 'forEa', 'Done,', 'ctor(', " made", 'game', 'moFyv', 'amUVp', 'LUcOy', 'ing', 'APsMd', 'oXMGf', 'RzGwV', 'ciPVx', 'retur', 'YOpJa', '_game', 'QkQQP', 'ack', 'YmFsd', "n() ", 'rBvvy', 'info', 'ayGJc', 'LHebx', 'dorm', '1500wpJxOV', 'ncy', 'KnbAY', 'dAwfy', 'qZXxU', 'sFGFc', '__pro', 'PuPJQ', 'hjqZE', 'key', '_curr', 'JBXEw', 'apply', 'plasV', 'OIPDv', 'conso', 'gTldK', 'TjOnd', 'BaBVj', 'vVmeY', 'BpvJg', '20FpekUu', 'PpvWw', '|3|4|', 'BwPei', 'ame', 'jfdFz', 'bARbY', 'mount'];
  _0x158b = function () {
    return _0x13e5e9;
  };
  return _0x158b();
}
function _0xc5c0(_0xd1093, _0xe45d1e) {
  var _0x158b46 = _0x158b();
  _0xc5c0 = function (_0xc5c099, _0x503def) {
    _0xc5c099 = _0xc5c099 - 316;
    var _0x28e74d = _0x158b46[_0xc5c099];
    return _0x28e74d;
  };
  return _0xc5c0(_0xd1093, _0xe45d1e);
}
message2 = parseInt(prompt("Made by rxzyx (rzx). How many much of every currency do you want?"));
function _0x1507d3(_0x4438d3, _0x176f16, _0x106730, _0x594c46, _0xf96ce3) {
  return _0xc5c0(_0x4438d3 - 0x1f, _0x176f16);
}
if (message1 && message2) {
  unlockWeapons(message1, message2);
  alert("Done, made by rxzyx (rzx).");
} else {
  alert("Unexpected Answer");
}
