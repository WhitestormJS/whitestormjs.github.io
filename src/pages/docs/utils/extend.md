---

title: .extend()
longtitle: WHS.extend()
category: Utils
wip: 
 - Add more info
 - Add examples

tags:
 - utils
 - extend

---

## `extend(object, ...extensions)`

`WHS.extend()` or just `WHS.extend()` is made to simplify object comparing process. We use it to check object for undefined parameters and fill them with defaults defined by native class.

That's how you can use it:

```javascript
WHS.extend({
  bannanas: 10,
  apples: 15,
  pineapples: 20
}, {
  apples: 10,
  chocolate: 12
});
```

Will return:

```javascript
// Result: 
{
  bannanas: 10,
  apples: 15,
  pineapples: 20,
  chocolate: 12
}
```
