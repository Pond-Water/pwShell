# pwcli
> The command-line tool for pwdb

This is a command line interface to query and update data, like MongoDB Shell, but for pwdb.

## Install
```bash
npm install -g pwcli
```

## Usage
To open a datastore file, use:
```bash
$ pwdb foo.db
```

Inside the REPL, the datastore namespace is attached to the `db` global property.

You can display the datastore you're using by typing:
```bash
pwdb> db.filename
foo.db
```

To perform queries and other operations, you can use the well-known pwdb datastore methods without the callback param. See [pwdb API](https://github.com/louischatriot/pwdb#api).
```bash
pwdb> db.insert([ { a: 1 }, { a: 2 } ])
{"a":1,"_id":"Kkui4fblZ5kqkmc8"},
{"a":2,"_id":"9ptV45vIEbBparvA"}
pwdb> db.find({ a: 1 })
{"a":1,"_id":"Kkui4fblZ5kqkmc8"}
pwdb> db.count()
2
```

You can change the datastore you're using with the `.open` command:
```bash
pwdb> .open bar.db
Opened file bar.db
```
If the filename is not specified, the datastore is set to in-memory only.

You can see other REPL commands by typing `.help`.

## Changelog

### 1.2.0
  - Automatically execute cursors (no need to put `.exec()` in the final of each query)

### 1.1.0
  - Automatically reload datastore when it changes

## License
MIT © [Chippewa Software Technology](http://www.chipsofttech.com)
