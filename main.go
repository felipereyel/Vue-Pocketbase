package main

import (
	"log"
	"os"
	"vuepb/pkgs/config"
	"vuepb/pkgs/handlers"
	_ "vuepb/pkgs/migrations"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
)

func main() {
	app := pocketbase.New()

	migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
		Automigrate: config.Envs.Automigrate,
	})

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/healthz", handlers.Healthz)
		e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS(config.Envs.PublicDir), true))
		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
