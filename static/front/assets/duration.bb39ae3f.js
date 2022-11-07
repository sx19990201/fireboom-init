import{h as T}from"./index.bb86fbbf.js";var H={exports:{}};(function(x,I){(function(y,a){x.exports=a()})(T,function(){var y,a,v=1e3,p=6e4,g=36e5,M=864e5,O=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,S=31536e6,Y=2592e6,P=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:S,months:Y,days:M,hours:g,minutes:p,seconds:v,milliseconds:1,weeks:6048e5},$=function(i){return i instanceof w},m=function(i,t,s){return new w(i,s,t.$l)},l=function(i){return a.p(i)+"s"},D=function(i){return i<0},d=function(i){return D(i)?Math.ceil(i):Math.floor(i)},j=function(i){return Math.abs(i)},c=function(i,t){return i?D(i)?{negative:!0,format:""+j(i)+t}:{negative:!1,format:""+i+t}:{negative:!1,format:""}},w=function(){function i(s,n,r){var e=this;if(this.$d={},this.$l=r,s===void 0&&(this.$ms=0,this.parseFromMilliseconds()),n)return m(s*f[l(n)],this);if(typeof s=="number")return this.$ms=s,this.parseFromMilliseconds(),this;if(typeof s=="object")return Object.keys(s).forEach(function(h){e.$d[l(h)]=s[h]}),this.calMilliseconds(),this;if(typeof s=="string"){var o=s.match(P);if(o){var u=o.slice(2).map(function(h){return h!=null?Number(h):0});return this.$d.years=u[0],this.$d.months=u[1],this.$d.weeks=u[2],this.$d.days=u[3],this.$d.hours=u[4],this.$d.minutes=u[5],this.$d.seconds=u[6],this.calMilliseconds(),this}}return this}var t=i.prototype;return t.calMilliseconds=function(){var s=this;this.$ms=Object.keys(this.$d).reduce(function(n,r){return n+(s.$d[r]||0)*f[r]},0)},t.parseFromMilliseconds=function(){var s=this.$ms;this.$d.years=d(s/S),s%=S,this.$d.months=d(s/Y),s%=Y,this.$d.days=d(s/M),s%=M,this.$d.hours=d(s/g),s%=g,this.$d.minutes=d(s/p),s%=p,this.$d.seconds=d(s/v),s%=v,this.$d.milliseconds=s},t.toISOString=function(){var s=c(this.$d.years,"Y"),n=c(this.$d.months,"M"),r=+this.$d.days||0;this.$d.weeks&&(r+=7*this.$d.weeks);var e=c(r,"D"),o=c(this.$d.hours,"H"),u=c(this.$d.minutes,"M"),h=this.$d.seconds||0;this.$d.milliseconds&&(h+=this.$d.milliseconds/1e3);var b=c(h,"S"),F=s.negative||n.negative||e.negative||o.negative||u.negative||b.negative,N=o.format||u.format||b.format?"T":"",k=(F?"-":"")+"P"+s.format+n.format+e.format+N+o.format+u.format+b.format;return k==="P"||k==="-P"?"P0D":k},t.toJSON=function(){return this.toISOString()},t.format=function(s){var n=s||"YYYY-MM-DDTHH:mm:ss",r={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return n.replace(O,function(e,o){return o||String(r[e])})},t.as=function(s){return this.$ms/f[l(s)]},t.get=function(s){var n=this.$ms,r=l(s);return r==="milliseconds"?n%=1e3:n=r==="weeks"?d(n/f[r]):this.$d[r],n===0?0:n},t.add=function(s,n,r){var e;return e=n?s*f[l(n)]:$(s)?s.$ms:m(s,this).$ms,m(this.$ms+e*(r?-1:1),this)},t.subtract=function(s,n){return this.add(s,n,!0)},t.locale=function(s){var n=this.clone();return n.$l=s,n},t.clone=function(){return m(this.$ms,this)},t.humanize=function(s){return y().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},t.milliseconds=function(){return this.get("milliseconds")},t.asMilliseconds=function(){return this.as("milliseconds")},t.seconds=function(){return this.get("seconds")},t.asSeconds=function(){return this.as("seconds")},t.minutes=function(){return this.get("minutes")},t.asMinutes=function(){return this.as("minutes")},t.hours=function(){return this.get("hours")},t.asHours=function(){return this.as("hours")},t.days=function(){return this.get("days")},t.asDays=function(){return this.as("days")},t.weeks=function(){return this.get("weeks")},t.asWeeks=function(){return this.as("weeks")},t.months=function(){return this.get("months")},t.asMonths=function(){return this.as("months")},t.years=function(){return this.get("years")},t.asYears=function(){return this.as("years")},i}();return function(i,t,s){y=s,a=s().$utils(),s.duration=function(e,o){var u=s.locale();return m(e,{$l:u},o)},s.isDuration=$;var n=t.prototype.add,r=t.prototype.subtract;t.prototype.add=function(e,o){return $(e)&&(e=e.asMilliseconds()),n.bind(this)(e,o)},t.prototype.subtract=function(e,o){return $(e)&&(e=e.asMilliseconds()),r.bind(this)(e,o)}}})})(H);const z=H.exports;export{z as d};
